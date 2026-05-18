import mongoose from 'mongoose';
const { Schema } = mongoose;


const bookingSchema = new Schema({
    carID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car'
    },
     userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
   downpayment:{
    type:Number,
    required:true
   },

   status:{
    type:String,
    enum:['pending','confirmed','completed', 'cancelled'],
    default:'pending',
    required:true
   },

   paymentStatus:{
    type:String,
    enum:['paid','unpaid'],
    default:'unpaid',
    required:true
   },

   startDate:{
    type:Date,
    required:true
   },
   
   endDate:{
    type:Date,
    required:true
   }
    }, {timestamps:true})

const booking = mongoose.model('booking',bookingSchema)
export default booking