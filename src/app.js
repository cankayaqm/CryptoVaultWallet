import express from "express";
import transactionRoutes from "./routes/transactionRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/transactions", transactionRoutes);

export default app;
