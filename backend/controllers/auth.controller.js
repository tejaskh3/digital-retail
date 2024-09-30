const signup =async (req, res)=>{
    res.send("signup controller ");
};

const login = async (req, res)=>{
    res.send("login controller ");
};

const logout = async (req, res)=>{
    res.send("logout controller ");
};

export {signup, login, logout}; 