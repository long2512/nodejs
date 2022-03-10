import express from 'express';
import productsRouter from './router/products';
import cors from 'cors';
import morgan from 'morgan';


const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

//router
app.use("/api",productsRouter)

//connect
const PORT = 3001;
app.listen(PORT,()=>{
    console.log('Server đang chạy cổng ',PORT);
});