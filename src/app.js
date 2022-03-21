// const http = require("http");
import express from "express";
import cors from "cors";
import productRouter from "./routes/product";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import CategoryRouter from "./routes/category";

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())

//routes
app.use("/api", productRouter);
app.use("/api", userRouter);
app.use("/api", CategoryRouter)

//connection db
mongoose.connect("mongodb://127.0.0.1:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(error => console.log(error))
//connect
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server cua ban dang chay cong", PORT);
})


