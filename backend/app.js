import express from "express";
import userRouter from "./routes/user-routes";

// import mongoose from "mongoose";
// const app = express();
// import dotenv from 'dotenv';
// const express = require('express');

const mongoose = require('mongoose');
const dotenv= require('dotenv');
const app = express();

// middlewares
app.use("/user",userRouter)
app.use(express.json());


mongoose.connect(`mongodb+srv://umams1103:${process.env.MONGODB_PASSWORD}@my-project.p9nfkvn.mongodb.net/`)

  .then(() => app.listen(5000, () => console.log("connected successfully")
  )
  ).catch(e=>console.log(e));

// app.listen(4000,()=>{
//     console.log('Connected to localhost port ${4000}')
// })
