import { log } from "console";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";


const app = express();
const server = createServer(app);
const io = new Server(server);

// handle incoming http request

app.get("/", (req, res) => {
    console.log("GET Request /");
    res.send("Hello From Server");
    
});

// handle socket connections

io.on("connection", (socket) => {
    console.log(`Someone connected to socket server and socket id is ${socket.id}`);
    
})

app.listen(9000, () => {
    console.log(`Server listening on port 9000`);
    
});