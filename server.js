import express from "express";

const app = express();

// handle incoming http request

app.get("/", (req, res) => {
    console.log("GET Request /");
    res.send("Hello From Server");
    
})

app.listen(9000, () => {
    console.log('Server listening on port 9000');
    
});