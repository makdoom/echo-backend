import express from "express";

const app = express();

// Middlwares
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  return res.json({ success: true, status: 200 });
});

export default app;
