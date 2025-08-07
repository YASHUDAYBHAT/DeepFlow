import express from "express";
import { connectDB } from "./lib/Dbsetup.js";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

connectDB();
app.listen (PORT,() => {
    console.log(`server has started running at ${PORT}`);
});

