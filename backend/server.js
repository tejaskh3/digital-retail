import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import connectDB from "./database/connectDB.js";
dotenv.config();

const app = express();

// middlewares  
app.use(express.json());

// routes
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

const startServer = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log("Server connection failed:", error);
    }
};

startServer();
