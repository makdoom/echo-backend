import dotenv from "dotenv";

const nodeEnv = process.env.NODE_ENV || "development";

dotenv.config();

export const ENV = {
  nodeEnv,
  port: process.env.PORT || 8080,

  corsOrigin: process.env.CORS_ORIGIN || "*",

  // Developement
  redisHost:
    nodeEnv == "development"
      ? process.env.REDIS_HOST_DEV
      : process.env.REDIS_HOST_PROD,
  redisPort:
    nodeEnv == "development"
      ? Number(process.env.REDIS_PORT_DEV)
      : Number(process.env.REDIS_PORT_PROD),

  // Production
  redisURL: process.env.REDIS_URL,

  // Database
  databaseURL: process.env.DATABASE_URL,
} as const;
