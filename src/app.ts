import express from "express";
import cors from "cors";

const app = express();

// Middlwares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.json({ success: true, status: 200 });
});

export default app;
