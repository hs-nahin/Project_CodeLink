// index.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import ACTIONS from "../codeLink-client/src/Actions/Actions.js"; // Import with ES Modules

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Client's origin
        methods: ["GET", "POST"],
    },
});


const userSocketMap = {};
const getAllConnectedClients = (roomId) => {
    const clients = io.sockets.adapter.rooms.get(roomId) || new Set();
    return Array.from(clients).map((socketId) => {
        return {
            socketId,
            username: userSocketMap[socketId],
        };
    });
};

io.on("connection", (socket) => {
    console.log("Socket connected", socket.id);

    socket.on(ACTIONS.JOIN, ({ roomId, userName }) => { // Change to userName
        const username = userName; // Map userName to username for consistency
        userSocketMap[socket.id] = username;
        socket.join(roomId);
        const clients = getAllConnectedClients(roomId);
        console.log("Clients in the room:", clients);
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                userName, // Send username
                socketId: socket.id,
            });
        });
    });

    socket.on('disconnecting', () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                userName: userSocketMap[socket.id],
            })
        })
        userSocketMap[socket.id];
        socket.leave();
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
