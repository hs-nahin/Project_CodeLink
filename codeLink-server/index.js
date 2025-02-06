import express from "express";
import http from "http";
import { Server } from "socket.io";
import ACTIONS from "../codeLink-client/src/Actions/Actions.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

// Returns an array of objects { socketId, username } for a given room
const getAllConnectedClients = (roomId) => {
  const clients = io.sockets.adapter.rooms.get(roomId) || new Set();
  return Array.from(clients).map((socketId) => ({
    socketId,
    username: userSocketMap[socketId],
  }));
};

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);

  // Handle a new user joining the room
  socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
    userSocketMap[socket.id] = userName;
    socket.join(roomId);

    const clients = getAllConnectedClients(roomId);
    // Inform every client in the room about the new connection
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, { clients, userName, socketId: socket.id });
    });
  });

  // Handle code changes: broadcast the new code to everyone else in the room
  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  // Handle a new client's sync request
  socket.on(ACTIONS.REQUEST_SYNC, ({ roomId }) => {
    const clients = getAllConnectedClients(roomId);
    // Exclude the requesting client
    const otherClients = clients.filter((client) => client.socketId !== socket.id);
    if (otherClients.length > 0) {
      // Pick the first client in the list to be the sync source
      const syncClient = otherClients[0];
      io.to(syncClient.socketId).emit(ACTIONS.REQUEST_SYNC, { senderId: socket.id });
    }
  });

  // When a client responds with its code, send it only to the requester
  socket.on(ACTIONS.SYNC_CODE, ({ roomId, code, targetSocketId }) => {
    if (targetSocketId) {
      io.to(targetSocketId).emit(ACTIONS.SYNC_CODE, { code });
    }
  });

  // Handle a client leaving the room voluntarily
  socket.on(ACTIONS.LEAVE, ({ roomId, userName }) => {
    // Broadcast the DISCONNECTED event to all other clients in the room
    socket.broadcast.to(roomId).emit(ACTIONS.DISCONNECTED, { socketId: socket.id, userName });
    socket.leave(roomId);
    delete userSocketMap[socket.id];
    console.log(`User ${userName} left room ${roomId}`);
  });
  

  // Handle disconnection (for example, closing the browser)
  socket.on("disconnecting", () => {
    [...socket.rooms].forEach((roomId) => {
      // Skip the default room (which is the socket id itself)
      if (roomId !== socket.id) {
        socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
          socketId: socket.id,
          userName: userSocketMap[socket.id],
        });
      }
    });
    delete userSocketMap[socket.id];
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
