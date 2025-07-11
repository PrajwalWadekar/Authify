import express from "express";
import dotenv from 'dotenv';
import { connectDB } from "./db/connectDB.js"
import authRoutes from './routes/auth.routes.js';
dotenv.config();
const app=express();

app.get("/",function(req,res){
    res.send("Backend working");
});

app.use("/api/auth",authRoutes);

app.listen(3000,()=>{
    connectDB();
    console.log("Server is running on port 3000");
});

