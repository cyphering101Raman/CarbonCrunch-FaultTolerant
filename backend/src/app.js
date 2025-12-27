import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import ingestRoute from "./routes/ingest.routes.js";
import queryRoutes from "./routes/query.routes.js";

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_PORT,
    credentials: true
}));

app.use("/api/v1", ingestRoute)
app.use("/api/v1", queryRoutes);


export default app;
