import express from "express";
import  "dotenv/config";
import rwClient from "./twitterClient";
import { CronJob } from "cron";

const app = express();
const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`);
})

const tweet = async () =>{
    try{
        await rwClient.v2.tweet(
            "Its 1:25pm! Good Afternoon! and have a very productive day! tesing servers:" 
        );
        console.log("tweeted!");
    }catch (error){
        console.error (error);
    }
};

const job = new CronJob("45 14 * * *", ()=>{
    tweet();
});

job.start();