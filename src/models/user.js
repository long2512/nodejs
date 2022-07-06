import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid"
const Users = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
}, {timestamps: true});

Users.pre("save", function(next){
    this.salt = uuidv4()
    this.password = this.encryptPassword(this.password)
    next()
});
Users.methods = {
    authenticate(password) {
        return this.password === this.encryptPassword(password)
    },
    encryptPassword(password) {
        if(!password) return
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

export default mongoose.model("User", Users);