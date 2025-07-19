import user from "../models/user.js";


const Signup = async(req, res) => {
    console.log("hello");
    try {
        const { name, email, password, phone } = req.body;
        console.log(req.body);
        await user.create({
            name,
            email,
            password,
            phone,
        })
        res.json({msg: "Signup Working Successfully", data: req.body});
    } catch(err) {
        res.json({ error: err });
    }
};

const Login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const token = await user.matchPasswordAndGenerateToken({ email, password });
        console.log("Login success\nJWT Token: "+token);
        return res.cookie("token", token).json({ msg: "Login Successfull",JWT_Token: token });
        
    } catch(err) {
        res.json({
            error: err.message,
        })
    }
}

export default { Signup, Login };