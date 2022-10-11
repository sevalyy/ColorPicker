import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("connecting to server...");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("connected to server!"));
};

export const send = (color) => {
  if (socket) socket.emit("newColor", color);
  else {
    console.log("socket not ready, request ignored");
  }
};
