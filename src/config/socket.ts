import http from "http";
import { Server } from "socket.io";

export const initSocket = (server: http.Server) => {
  console.log("Initializing socket server");

  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    // more events can be handled here ...

    io.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });

  return io;
};
