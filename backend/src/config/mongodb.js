import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Cannot connect to mongodb", error);
    }
}