import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectToMyDatabase from "./database/db.js";
import feedbackRouter from "./routes/feedbackRoutes.routes.js";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
connectToMyDatabase();

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
