

import mongoose from "mongoose";
const {Schema} = mongoose;

const carSchema = new Schema({
    CarName:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        enum:['suv','sedan','hatchback','electric'],
        required:true
    },
    Year:{
        type:Number,
        required:false
    },
    Brand:{
        type:String,
        required:true
    },
    Engine:{
        type:String
    },
    Transmission:{
        type:String,
        enum:['automatic','manual'],
        default:"manual"
        // required:true
    },
    Fueltype:{
        type:String,
        enum:['diesel','petrol','CNG','hybrid'],
        // required:true
    },
    Price:{
        type:Number,
        required:true
    },
    Image:{
        type:String,
        default:'https://via.placeholder.com/300x200?text=Car'
    },
    Description:{
        type:String,
        default:''
    },
    Model:{
        type:String,
        required:true
    },
    Drive:{
        type:String,
        required:true
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    Seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps: true});

const Car = mongoose.model('Car',carSchema)
export default Car
