import express from "express";
import { connectDB } from "./lib/Dbsetup.js";
import dotenv from "dotenv"
import taskroutes from "./routes/taskroutes.js"
import userauth from "./routes/userauth.js"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/notes", taskroutes);
app.use("/api/auth", userauth);

connectDB();
app.listen (PORT,() => {
    console.log(`server has started running at ${PORT}`);
});

