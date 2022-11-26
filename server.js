const io = require("socket.io")(5000);

io.on("connection", socket => {
    socket.emit("Chat-message", "Hello word")
})