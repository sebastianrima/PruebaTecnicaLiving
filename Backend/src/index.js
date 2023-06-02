//imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path  from "path";
import { fileURLToPath } from "url";
import { setRoutes } from "./Routes/index.js";

//route
const app = express();

//dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({path: path.join(__dirname, "../.env")});

//settings
app.use(express.json());
const corsOptions = {
    origin: "*",
    methods: ["GET"],
};
app.use(cors(corsOptions))

//Listen
app.listen(process.env.PORT ?? 3030, () => console.log(process.env.PORT ?? 3030))

//routes
setRoutes(app,process.env.BASE_URL ?? "/api");