import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env";

if (!ENV.databaseURL)
  throw new Error("DATABASE_URL is not set in the .env file");

export default defineConfig({
  schema: "./src/db/schema/index.ts", // Your schema file path
  out: "./src/db/migrations", // Your migrations folder
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
