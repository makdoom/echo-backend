import http from "http";
import app from "./app";
import { ENV } from "./config/env";

const server = http.createServer(app);

server.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
