import express, { Application } from "express";
import cors from "cors";

import bodyParser from "body-parser";
import feedbackRoutes from "./routes/feedback";

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/feedback", feedbackRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
