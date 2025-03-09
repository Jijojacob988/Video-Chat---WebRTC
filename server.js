
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname, join } from "path";


const app = express();
const server = createServer(app);
const io = new Server(server);

// file://your/system/path/file.html
const __dirname = dirname(fileURLToPath(import.meta.url));

// handle incoming http request

app.get("/", (req, res) => {
    console.log("GET Request /");
    res.sendFile(join(__dirname + "/app/index.html"));
    
});

// handle socket connections

io.on("connection", (socket) => {
    console.log(`Someone connected to socket server and socket id is ${socket.id}`);
    
})

app.listen(9000, () => {
    console.log(`Server listening on port 9000`);
    
});