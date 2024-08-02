import express from "express";
import config from "./config/config.js";
import db from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import mongoose from "mongoose";

const app= express();

app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/post",postRouter);


db.then(()=> {
    console.log("Database connected..");
}).catch((err)=> {
    console.log("Error in db");
});


app.listen(config.port, ()=> {
    console.log(` server runnning at port ${config.port}`);
});