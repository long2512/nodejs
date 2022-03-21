import mongoose, { Schema } from "mongoose";

const Users = new Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 10
    },
    email: {
        type: String,
        required: true,
        email: true,
    },
    password: {
        type: Number,
        required: true
    }
})

export default mongoose.model("User", Users);