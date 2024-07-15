import express from "express";
import  "dotenv/config";
import rwClient from "./twitterClient";
import { CronJob } from "cron";

const app = express();
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`);
})