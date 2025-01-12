'use client'
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
  Label
} from 'keep-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import io from 'socket.io-client';
import EditorPage from '../EditorPage/EditorPage';

const socket = io('http://localhost:5000');

export const EnterRoomCard = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const joinRoom = (e) => {
    e.preventDefault();
    if (roomId && userName) {
      socket.emit("join", { roomId, userName });
      setJoined(true);
      navigate('/editor');
    }
  };

  if (!joined) {
    return (
      <Card className="max-w-lg sm:w-full">
        <CardContent className="space-y-4">
          <CardHeader>
            <CardTitle className='text-center'>Enter the <span className='bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text'>CodeLink</span> Room</CardTitle>
          </CardHeader>

          <Divider>Join</Divider>
          <form className="space-y-3">
            <fieldset className="space-y-2">
              <Label>Room ID*</Label>
              <div className="relative">
                <Input placeholder="Enter Room ID" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
              </div>
            </fieldset>
            <fieldset className="space-y-2">
              <Label>User Name*</Label>
              <div className="relative">
                <Input placeholder="Enter username" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
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
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="bg-gradient-to-r from-green-400 to-green-500 text-transparent bg-clip-text hover:underline hover:text-rose-400">
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
