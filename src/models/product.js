import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const Product = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
       type: String,
       required: true
    },
    desc: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps : true})

export default mongoose.model("Product", Product);