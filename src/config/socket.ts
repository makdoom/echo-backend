import http from "http";
import { Server } from "socket.io";
import { ENV } from "./env";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redisClient from "./redis";

export const initSocket = (server: http.Server) => {
  console.log("Initializing socket server");

  const io = new Server(server, {
    cors: { origin: ENV.corsOrigin },
    adapter: createAdapter(redisClient),
  });

  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("event:message", (message: string) => {
      if (typeof message !== "string" || !message.trim()) {
        socket.emit("error", "Invalid message");
        return;
      }

      // Broadcast to everyone (now works across servers when scaled)
      io.emit("message", {
        content: message.trim(),
        from: socket.id,
        timestamp: new Date().toISOString(),
      });
    });

    socket.on("disconnect", (reason) => {
      console.log(`Client disconnected: ${socket.id} (${reason})`);
    });
  });

  // Graceful shutdown (important for containers / orchestration)
  const shutdown = async () => {
    console.log("Shutting down Socket.IO + Redis...");
    io.close();
    await redisClient.quit().catch(() => {}); // ignore errors on quit
    process.exit(0);
  };

  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);

  return io;
};
