import mongoose from "mongoose";

const connect = async (url)=>{
    try {
        const connection = await mongoose.connect(url);
        console.log("MongoDB connected successfully to host:", connection.connection.host);
    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connect; 
