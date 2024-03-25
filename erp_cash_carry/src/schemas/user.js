import mongoose from "mongoose";



const userschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },



},{ timestamps: true })


export default mongoose.models.user || mongoose.model("user", userschema);