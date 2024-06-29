import mongoose from 'mongoose'

export const connectDB= async ()=>{
    mongoose.connect('mongoDB').then(()=>{console.log("DB connected")
    })
}