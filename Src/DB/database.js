import dotenv from 'dotenv'
dotenv.config()

import mongoose from "mongoose";
console.log(process.env.MONGODB_URL);

export default async function ConnectDB() {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MONGO DB RUN ON ${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log(error);
        
    }
}