'use client';

import { Editor } from '@monaco-editor/react';
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
} from 'keep-react';

const EditorPage = () => {
  const handleEditorChange = (value, event) => {
    event.preventDefault();
    console.log('Editor value:', value);
    // Handle code changes if needed
  };

  const handleLanguageChange = (language) => {
    console.log('Selected Language:', language);
    // Optionally handle language change
  };

  const handleLeaveRoom = () => {
    // Logic for leaving the room
    toast.error('You have successfully left the room!');
    // Redirect or other cleanup actions if needed
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full p-4 bg-gray-100 border-b lg:border-r lg:border-b-0 border-gray-300 lg:h-screen overflow-auto">
        <h2 className="text-xl font-bold mb-4">Code Room Info</h2>
        <p className="mb-2">
          Room ID: <span className="font-semibold">12345</span>
        </p>
        <p className="mb-2">Users: 5</p>
        <p className="mb-2">Language: JavaScript</p>

        {/* Language Selector */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Select Language</h3>
          <Select onValueChange={handleLanguageChange}>
            <SelectAction className="w-full max-w-md">
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
          language="javascript" // Default language
          defaultValue="// start coding here"
          onChange={handleEditorChange}
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
