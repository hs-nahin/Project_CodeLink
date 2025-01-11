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
  InputIcon,
  Label
} from 'keep-react';
import { Envelope, Lock } from 'phosphor-react';
import { useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export const EnterRoomCard = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const joinRoom = (e) => {
    e.preventDefault();
    if (roomId && userName) {
      socket.emit("join", { roomId, userName });
      setJoined(true);
    }
  };
  if (!joined) {
  return (
    <Card className="max-w-md">
      <CardContent className="space-y-4">
        <CardHeader>
          <CardTitle>Enter the SyncSpace</CardTitle>
        </CardHeader>

        <Divider>Join</Divider>
        <form className="space-y-3">
          <fieldset className="space-y-2">
            <Label htmlFor="email">SyncSpace ID*</Label>
            <div className="relative">
              <Input type="text" placeholder="Enter SyncRoom ID" className="ps-11" value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
              <InputIcon>
                <Envelope size={19} color="#AFBACA" />
              </InputIcon>
            </div>
          </fieldset>
          <fieldset className="space-y-2">
            <Label htmlFor="password">User Name*</Label>
            <div className="relative">
              <Input placeholder="Enter username" type="text" className="ps-11" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              <InputIcon>
                <Lock size={19} color="#AFBACA" />
              </InputIcon>
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
                  <BreadcrumbLink href="/" className="text-emerald-600 hover:underline">
                    new room
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

return <div>User Joined</div>;
};