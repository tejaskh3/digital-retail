import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:   [true, "Email is required"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [ true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    cartItem: [
        {
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
        }
    ],
    role: {
        type: String,
        enum: ["customer", "admin"],
        default: "customer",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});
