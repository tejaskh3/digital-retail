import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
dotenv.config();

const app = express();

// middlewares  
app.use(express.json());

// routes
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});


