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

export default app;
