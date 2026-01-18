import http from "http";

import app from "./app";
import { ENV } from "./config/env";
import { initSocket } from "./config/socket";
import "./config/redis";

const server = http.createServer(app);

// Initialize socket server
initSocket(server);

server.listen(ENV.port, async () => {
  console.log(`Server is running on port ${ENV.port}`);
});
