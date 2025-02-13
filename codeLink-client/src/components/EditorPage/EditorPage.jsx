import { Editor } from "@monaco-editor/react";
import {
  Button,
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  toast,
} from "keep-react";
import { User } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Navigate, useLocation, useNavigate, useParams } from "react-router";
import ACTIONS from "../../Actions/Actions";
import { initSocket } from "../../Socket/socket";

const EditorPage = () => {
  const socketRef = useRef(null);
  const editorRef = useRef(null); // Will store the Monaco Editor instance
  const location = useLocation();
  const { roomId } = useParams();
  const reactNavigator = useNavigate();
  const [clients, setClients] = useState([]);
  const { userName } = location.state || { userName: "Anonymous" };

  if (!userName) {
    toast.error("Username is required to join the room!");
    reactNavigator("/");
  }

  useEffect(() => {
    const init = async () => {
      // Establish socket connection
      socketRef.current = await initSocket();

      // Handle connection errors
      socketRef.current.on("connect_error", handleError);
      socketRef.current.on("connect_failed", handleError);

      function handleError(err) {
        console.error("Socket connection failed:", err);
        toast.error("Failed to connect to the server. Please try again later.");
        reactNavigator("/");
      }

      // Emit the JOIN action to join the room
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        userName: userName || "Anonymous",
      });

      // Listen for the JOINED event to update the client list
      socketRef.current.on(ACTIONS.JOINED, ({ clients, userName }) => {
        if (userName && userName === location.state.userName) {
          toast.success(`${userName} has joined the room!`);
        }
        // Filter out duplicate entries (if any)
        setClients(
          clients.filter(
            (client, index, self) =>
              index === self.findIndex((c) => c.username === client.username)
          )
        );
      });

      // Listen for DISCONNECTED events to update the client list
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, userName }) => {
        toast.error(`${userName} has left the room!`);
        setClients((prevClients) =>
          prevClients.filter((client) => client.socketId !== socketId)
        );
      });

      // Listen for remote code changes and update the editor if needed
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (editorRef.current) {
          const currentCode = editorRef.current.getValue();
          if (code !== currentCode) {
            editorRef.current.setValue(code);
          }
        }
      });

      // Listen for SYNC_CODE to update the editor
      socketRef.current.on(ACTIONS.SYNC_CODE, ({ code }) => {
        if (editorRef.current) {
          editorRef.current.setValue(code);
        }
      });

      // Listen for REQUEST_SYNC events from the server.
      // When another client is chosen as the sync source, it will receive this event and respond.
      socketRef.current.on(ACTIONS.REQUEST_SYNC, ({ senderId }) => {
        if (editorRef.current) {
          const code = editorRef.current.getValue();
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            roomId,
            code,
            targetSocketId: senderId,
          });
        }
      });
    };

    init();

    // Cleanup on component unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off(ACTIONS.JOINED);
        socketRef.current.off(ACTIONS.DISCONNECTED);
        socketRef.current.off(ACTIONS.CODE_CHANGE);
        socketRef.current.off(ACTIONS.SYNC_CODE);
        socketRef.current.off(ACTIONS.REQUEST_SYNC);
        socketRef.current = null;
      }
    };
  }, [location.state, reactNavigator, roomId, userName]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [editorLanguage, setEditorLanguage] = useState("javascript");

  if (!location.state) {
    return <Navigate to="/" />;
  }

  // Handle local code changes: update the editor and emit changes to others.
  // eslint-disable-next-line no-unused-vars
  const handleEditorChange = (value, event) => {
    if (socketRef.current) {
      socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code: value });
    }
  };

  // After the editor mounts, store its instance and request code sync from an existing client.
  // eslint-disable-next-line no-unused-vars
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    if (socketRef.current) {
      socketRef.current.emit(ACTIONS.REQUEST_SYNC, { roomId });
    }
  };

  const handleLanguageChange = (language) => {
    console.log("Selected Language:", language);
    setEditorLanguage(language);
  };

  const handleLeaveRoom = () => {
    if (socketRef.current) {
      // Emit the LEAVE event to the server
      socketRef.current.emit(ACTIONS.LEAVE, { roomId, userName });

      // Option 1: Add a short delay before disconnecting (e.g., 100ms)
      setTimeout(() => {
        socketRef.current.disconnect();
        socketRef.current = null;
        reactNavigator("/");
      }, 100);

      // Option 2: Alternatively, you can omit an immediate disconnect.
      // The navigation away from the page will clean up the connection.
    }

    toast.success("You have left the room!");
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`flex flex-col lg:flex-row h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`lg:w-1/4 w-full p-4 border-b lg:border-r lg:border-b-0 border-gray-300 lg:h-screen overflow-auto ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-100 border-gray-300"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Code Room Info</h2>
        <p className="mb-2">
          Room ID: <span className="font-semibold">{roomId}</span>
        </p>

        {/* Room ID Copy Button */}
        <div className="mt-4">
          <CopyToClipboard text={roomId}>
            <Button
              onClick={() => toast.success("Room ID copied successfully!")}
              className="!mt-4 block w-full bg-emerald-500 text-white hover:bg-emerald-600 mb-5"
            >
              Copy Room ID
            </Button>
          </CopyToClipboard>
        </div>

        {/* Theme Toggle */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Theme</h3>
          <div className="flex items-center gap-4">
            <span>Light</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <div
                className={`w-11 h-6 bg-gray-200 rounded-full transition-colors ${
                  isDarkMode ? "bg-blue-600" : "bg-gray-200"
                }`}
              ></div>
              <span
                className={`absolute w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                }`}
              ></span>
            </label>
            <span>Dark</span>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Select Language</h3>
          <Select onValueChange={handleLanguageChange} className="w-full">
            <SelectAction>
              <SelectValue placeholder="Select Language" />
            </SelectAction>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Programming Language</SelectLabel>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Members List */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Members in the Room:</h3>
          <Select className="w-full">
            <SelectAction>
              <div className="flex items-center gap-2.5">
                <span>
                  <User className="h-4 w-4" />
                </span>
                <SelectValue placeholder="Check team members" />
              </div>
            </SelectAction>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Member</SelectLabel>
                {clients.map((client, index) => (
                  <SelectItem
                    key={index}
                    value={client.username || "Anonymous"}
                  >
                    {client.username || "Anonymous"}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Leave Room Button */}
        <div className="mt-6">
          <Button
            onClick={handleLeaveRoom}
            className="!mt-4 block w-full bg-red-500 text-white hover:bg-red-600"
          >
            Leave Room
          </Button>
        </div>
      </div>

      {/* Editor */}
      <div className="lg:w-3/4 w-full p-4 flex-1 lg:h-screen overflow-auto">
        <Editor
          height="100%"
          language={editorLanguage}
          defaultValue="// start coding here"
          theme={isDarkMode ? "vs-dark" : "light"}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
          }}
        />
      </div>
    </div>
  );
};

export default EditorPage;
