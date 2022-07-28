

import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();

import 'dotenv/config';

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URL;

mongoose.connect(url,{useUnifiedTopology:true},(err)=>console.log(console.log("connection created",err)))

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const port = process.env.PORT

app.listen(port,() =>{
    console.log('server is running on port:',port)
})