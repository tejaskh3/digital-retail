import mongoose from "mongoose";
import bcrypt from "bcrypt";

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


const User = mongoose.model("User", userSchema);

// document middlewares one out of 4 types of mongoose middlewares
// pre-save hook to hash the password before saving the user to the database
userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = async function(password){
    const isValidPassword = await bcrypt.compare(password, this.password);
    return isValidPassword;
};  

export default User;
