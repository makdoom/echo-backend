import dotenv from "dotenv";

const nodeEnv = process.env.NODE_ENV || "development";

dotenv.config({
  path: `.env.${nodeEnv}`,
});

export const ENV = {
  nodeEnv,
  port: process.env.PORT || 8080,

  corsOrigin: process.env.CORS_ORIGIN || "*",

  // Developement
  redisHost: process.env.REDIS_HOST,
  redisPort: Number(process.env.REDIS_PORT),

  // Production
  redisURL: process.env.REDIS_URL,
} as const;
