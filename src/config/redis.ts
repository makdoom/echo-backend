import Redis from "ioredis";
import { ENV } from "./env";

export const redis =
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

export const pub = redis.duplicate();
export const sub = redis.duplicate();

redis.on("connect", () => {
  console.log("Connnected to Redis Server");
});

redis.on("error", (error) => {
  console.log("Redis connection error:", error);
});
