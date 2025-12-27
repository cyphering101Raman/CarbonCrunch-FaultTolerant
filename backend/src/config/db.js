import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
    try {
        const instance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected ✅");
        console.log("Host: ", instance.connection.host);
        console.log("Port: ", instance.connection.port);
        console.log("Name: ", instance.connection.name);
    } catch (err) {
        console.error("MongoDB connection error ❌");
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;
