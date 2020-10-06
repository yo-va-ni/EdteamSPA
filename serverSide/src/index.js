const express = require("express");
const http = require("http")
const socket_io = require("socket.io");

const path = require("path");
const cors = require("cors");
const ioModule = require("./websocket");

// Initializing
const app = express();
const server = http.createServer(app);
const io = socket_io(server);
ioModule(io);

// Settings
app.set("PORT", 3000);


app.get("/", (req, res) => {
    res.send("Hello")
});



// Middlewares
app.use(express.json());
app.use(cors({origin: "*"}));


// Routes
app.use(require("./routes/index"));


// Server listening
server.listen(app.get("PORT"), () => {
    console.log(`Listening at port ${app.get("PORT")}`);
})