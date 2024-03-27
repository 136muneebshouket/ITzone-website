import mongoose from "mongoose";



const userschema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

},{ timestamps: true })


export default mongoose.models.users || mongoose.model("users", userschema);