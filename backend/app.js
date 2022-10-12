const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

let lastColor = "#5e30e";

io.on("connection", (socket) => {
  console.log("one user connected");

  socket.emit("receive", lastColor);

  socket.on("newColor", (color) => {
    console.log(color);

    lastColor = color;
    io.emit("receive", color);
  });

  socket.on("disconnect", () => {
    console.log("user left...");
  });
});

http.listen(3001, () => console.log("Server is up 🚀 🚀 on 3001"));
