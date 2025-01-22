import express from "express";
import http from "http";
import { Server } from "socket.io";
import * as ACTIONS from "../codeLink-client/src/Actions/Actions.js"; // Import with ES Modules

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Client's origin
        methods: ["GET", "POST"],
    },
});

const userSocketMap = {};

// Utility function to get all connected clients in a room
const getAllConnectedClients = (roomId) => {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
        (socketId) => {
            return {
                socketId,
                username: userSocketMap[socketId],
            };
        }
    );
};

io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // Handle user joining a room
    socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
        userSocketMap[socket.id] = userName;
        socket.join(roomId);

        const clients = getAllConnectedClients(roomId);

        // Notify all clients in the room about the new user
        clients.forEach(({ socketId }) => {
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                userName,
                socketId: socket.id,
            });
        });
    });

    // Handle real-time code changes
    socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
        socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code }); // Broadcast the code to all except the sender
    });

    // Handle code synchronization for a specific client
    socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
        io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code }); // Send the current code to the specified client
    });

    // Handle user disconnecting
    socket.on("disconnecting", () => {
        const rooms = [...socket.rooms];
        rooms.forEach((roomId) => {
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                userName: userSocketMap[socket.id],
            });
        });
        delete userSocketMap[socket.id];
    });

    // Clean up after disconnection
    socket.on("disconnect", () => {
        console.log("Socket disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
