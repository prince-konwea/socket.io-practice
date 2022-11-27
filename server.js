const cors = require("cors");

app.use(cors({
    origin: '*'
}));


const io = require("socket.io")(5000);

io.on("connection", socket => {
    socket.emit("Chat-message", "Hello word")
})

const socket = io("http://localhost:5000");

socket.on("chat-message", data =>{
    console.log(data)
})