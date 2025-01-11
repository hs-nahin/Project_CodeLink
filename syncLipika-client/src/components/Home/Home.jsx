import 'react';
import { useState } from 'react';
import io from 'socket.io-client';
import { EnterRoomCard } from '../EnterRoomCard/EnterRoomCard';

const socket = io("http://localhost:5000")

const Home = () => {
    const [joined, setJoined] = useState(false);
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-10">
            <EnterRoomCard />
        </div>
    );
};

export default Home;
