import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    mobileNumber : {
        type: String,
        required: true,
        unique: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required:true,
    }
}, { timestamps: true });

 const User = mongoose.model('users', userModelSchema)

export default User