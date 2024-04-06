import mongoose from "mongoose";

const carRegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email : {
        type: String,
        required: true,
        unique: true,
    },
    cartype: {
        type: String,
        required: true
    },
    carmodel: {
        type: String,
        required: true,
    },
    carno: {
        type: String,
        required: true,
    },
    starttime:{
       type: Date,
       required: true,
    },
    endtime:{
        type: Date,
        required: true,
    },
    status:{
        type:String,
        enum:["BOOKED","UNBOOKED"],
        default:"UNBOOKED",
       },
    createdBy: {
        type: mongoose.Types.ObjectId,
    }
    //afterwards add insurance image verification
    //afterwards add realtime image verification
}, { timestamps: true });

 const Cars = mongoose.model('cars', carRegisterSchema)

export default Cars