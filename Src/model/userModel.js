import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    Name:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,
    token:String,
    userType:{
        type:String,
        enum:['user','admin'],
        default:"user"
    },
    phone:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    },
    licenseNumber:{
        type:String,
        default:''
    }

},{timestamps:true})

const User = mongoose.model('User',userSchema)
export default User