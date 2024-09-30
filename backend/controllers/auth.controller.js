import User from "../models/user.model.js";

const signup =async (req, res)=>{
    const {name, email, password, } = req.body;
    if(!name){
        return res.status(400).json({message: "Name is required"});
    }
    if(!email){
        return res.status(400).json({message: "Email is required"});
    }
    if(!password){
        return res.status(400).json({message: "Password is required"});
    }

    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message: "User already exists"});
    }

    const newUser = new User({name, email, password});
    await newUser.save();

    res.status(201).json({message: "User created successfully", user});
};

const login = async (req, res)=>{
    res.send("login controller ");
};

const logout = async (req, res)=>{
    res.send("logout controller ");
};

export {signup, login, logout}; 