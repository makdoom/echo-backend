import { Pool } from "pg";
import { ENV } from "../config/env";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  connectionString: ENV.databaseURL as string,
});

export const db = drizzle(pool);
