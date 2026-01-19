import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();

// Authentication catch all route
app.all("/api/auth/*splat", toNodeHandler(auth));

// Middlwares
app.use(cors());
app.use(express.json());

// Routes
app.get("/health", (req, res) => {
  return res.json({ success: true, status: 200 });
});

export default app;
