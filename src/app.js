import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import transactionRoutes 
from "./routes/transactionRoutes.js";

const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(
path.join(__dirname,"../public")
));

app.use(
"/api/transactions",
transactionRoutes
);

export default app;
