const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);
const io = socketio(server)

app.use(express.static(path.join(__dirname, "public")))



// Run when client connects

io.on("connection", socket => {
  
// welcome current user
  socket.emit("message", "welcome to chatcord");

// broadcast when a user connects

socket.broadcast.emit("message", "A user has joined the chat")

// Runs when user disconnects

socket.on("disconnect", () => {
    io.emit("message", "A user has left the chat")
})
})

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

