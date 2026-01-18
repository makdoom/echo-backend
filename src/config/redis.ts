import Redis from "ioredis";
import { ENV } from "./env";

export const redisClient =
  ENV.nodeEnv == "production"
    ? new Redis(ENV.redisURL!, {
        tls: {},
        maxRetriesPerRequest: 3,
        enableReadyCheck: true,
      })
    : new Redis({
        host: ENV.redisHost,
        port: ENV.redisPort,
      });

redisClient.on("connect", () => console.log("Connnected to Redis Server"));
redisClient.on("error", (error) =>
  console.log("Redis connection error:", error),
);

export default redisClient;
