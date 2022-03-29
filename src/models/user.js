import mongoose, { Schema } from "mongoose";
import { createHmac } from 'crypto';
import { v4 as uuidv4 } from 'uuid'

const Users = new Schema({
    fullname: {
        type: String,
        // required: true,
        // minlength: 10
    },
    email: {
        type: String,
        // required: true,
        // email: true,
    },
    password: {
        type: String,
        // required: true
    },
    salt: {
        type: String
    }
},{ timestamps: true});

Users.methods = {
    encryptPassword(password){
        if(!password) return
        try {
            return createHmac("sha256",this.salt).update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }
}
Users.pre("save", function (next){
    this.salt = uuidv4();
    this.password = this.encryptPassword(this.password);
    next();
})

export default mongoose.model("User", Users);