import express from 'express';
import productsRouter from './router/products';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


// const express = require('express');
// const cors = require('cors');

const app = express();

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

//router
app.use("/api",productsRouter)

// connecttion db
mongoose.connect("mongodb://localhost:27017/we16310")
.then(() => console.log("Kết nối db thành công"))
.catch(() => console.log(error))

//connect
const PORT = 8000;
app.listen(PORT,()=>{
    console.log('Server đang chạy cổng ',PORT);
});