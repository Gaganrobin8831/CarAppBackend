import mongoose from "mongoose";
const {Schema} = mongoose;

const paySchema = new Schema({
    carID:{
        type:String,
    },
    userID:{
        type:String,
    },
    payment:{
        type:Number,
        required:true
    },
    carddetails:{
          type:String,
          required:true
    },
    cardexpiry:{
        type:String,
    }
},{timestamps:true})
const payment = mongoose.model('payment',paySchema)
export default payment