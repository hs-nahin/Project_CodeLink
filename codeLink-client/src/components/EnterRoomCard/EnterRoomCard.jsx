"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Divider,
  Input,
  Label,
  toast,
} from "keep-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidV4 } from 'uuid';
import EditorPage from "../EditorPage/EditorPage";




export const EnterRoomCard = () => {
  const joined = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  // Join Room Function
  const joinRoom = (e) => {
    e.preventDefault();
    if (!roomId || !userName) {
      toast.error('Room ID and username are required to create the room.');
      return;
    }
    // Redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      }
    })
  };
  // New Room ID Generator Function
  const createNewRoomId = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    console.log(id);
    toast.success('Successfully created a new room ID! 🎉')
  }

  
  if (!joined) {
    return (
      <Card className="max-w-lg sm:w-full">
        <CardContent className="space-y-4">
          <CardHeader>
            <CardTitle className="text-center">
              Enter the{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text">
                CodeLink
              </span>{" "}
              Room
            </CardTitle>
          </CardHeader>

          <Divider>Join</Divider>
          <form className="space-y-3">
            <fieldset className="space-y-2">
              <Label>Room ID*</Label>
              <div className="relative">
                <Input
                  placeholder="Enter Room ID"
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />
              </div>
            </fieldset>
            <fieldset className="space-y-2">
              <Label>User Name*</Label>
              <div className="relative">
                <Input
                  placeholder="Enter username"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </fieldset>
            <Button
              type="submit"
              onClick={joinRoom}
              className="!mt-4 block w-full ease-in-out duration-300 bg-emerald-500 text-white hover:bg-emerald-600"
            >
              Join Room
            </Button>
          </form>
          <div className="text-sm flex justify-between items-center">
            <span>Don&apos;t have a room ID?</span>
            <div className="flex ml-1 items-center gap-1">
              <span>Create</span>
              <Breadcrumb onClick={createNewRoomId}>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/"
                      className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text hover:underline hover:text-rose-400"
                    >
                      new room
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return <EditorPage />;
};
