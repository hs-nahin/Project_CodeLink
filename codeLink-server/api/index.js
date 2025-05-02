import { exec } from "child_process";
import cors from "cors";
import express from "express";
import fs from "fs";
import http from "http";
import { Server } from "socket.io";
import ACTIONS from "../../Actions/Actions.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// =====================
// Code Execution Route
// =====================
app.post("/run", (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.json({ output: "Missing language or code" });
  }

  if (language === "javascript") {
    // Ensure that JS code is passed as a string and is executed properly
    exec(`node -e "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
      if (error) return res.json({ output: `Error: ${error.message}` });
      if (stderr) return res.json({ output: `stderr: ${stderr}` });
      res.json({ output: stdout.trim() });
    });
  }

  else if (language === "python") {
    // Ensure Python code is correctly passed for execution
    exec(`python3 -c "${code.replace(/"/g, '\\"')}"`, (error, stdout, stderr) => {
      if (error) return res.json({ output: `Error: ${error.message}` });
      if (stderr) return res.json({ output: `stderr: ${stderr}` });
      res.json({ output: stdout.trim() });
    });
  }

  else if (language === "cpp") {
    const filename = "temp.cpp";
    const executable = "a.out";
    fs.writeFileSync(filename, code);

    exec(`g++ ${filename} -o ${executable}`, (error, stdout, stderr) => {
      if (error) return res.json({ output: `Error: ${error.message}` });
      if (stderr) return res.json({ output: `stderr: ${stderr}` });

      exec(`./${executable}`, (runError, runStdout, runStderr) => {
        if (runError) return res.json({ output: `Error: ${runError.message}` });
        if (runStderr) return res.json({ output: `stderr: ${runStderr}` });
        res.json({ output: runStdout.trim() });
      });
    });
  }

  // else if (language === "java") {
  //   const filename = "Temp.java";
  //   fs.writeFileSync(filename, code);

  //   exec(`javac ${filename}`, (error, stdout, stderr) => {
  //     if (error) return res.json({ output: `Error: ${error.message}` });
  //     if (stderr) return res.json({ output: `stderr: ${stderr}` });

  //     exec(`java Temp`, (runError, runStdout, runStderr) => {
  //       if (runError) return res.json({ output: `Error: ${runError.message}` });
  //       if (runStderr) return res.json({ output: `stderr: ${runStderr}` });
  //       res.json({ output: runStdout.trim() });
  //     });
  //   });
  // }

  else {
    res.json({ output: "Unsupported language" });
  }
});

// =====================
// WebSocket Logic
// =====================
const userSocketMap = {};

const getAllConnectedClients = (roomId) => {
  const clients = io.sockets.adapter.rooms.get(roomId) || new Set();
  return Array.from(clients).map((socketId) => ({
    socketId,
    username: userSocketMap[socketId],
  }));
};

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, userName }) => {
    userSocketMap[socket.id] = userName;
    socket.join(roomId);

    const clients = getAllConnectedClients(roomId);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        userName,
        socketId: socket.id,
      });
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  socket.on(ACTIONS.REQUEST_SYNC, ({ roomId }) => {
    const clients = getAllConnectedClients(roomId);
    const otherClients = clients.filter((c) => c.socketId !== socket.id);
    if (otherClients.length > 0) {
      io.to(otherClients[0].socketId).emit(ACTIONS.REQUEST_SYNC, {
        senderId: socket.id,
      });
    }
  });

  socket.on(ACTIONS.SYNC_CODE, ({ code, targetSocketId }) => {
    if (targetSocketId) {
      io.to(targetSocketId).emit(ACTIONS.SYNC_CODE, { code });
    }
  });

  socket.on(ACTIONS.LEAVE, ({ roomId, userName }) => {
    socket.broadcast.to(roomId).emit(ACTIONS.DISCONNECTED, {
      socketId: socket.id,
      userName,
    });
    socket.leave(roomId);
    delete userSocketMap[socket.id];
  });

  socket.on("disconnecting", () => {
    [...socket.rooms].forEach((roomId) => {
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

// =====================
// Start Server
// =====================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
