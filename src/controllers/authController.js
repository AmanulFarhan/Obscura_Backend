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
        console.log(err.message);
        res.json({ error: err.message });
    }
};

const Login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const token = await user.matchPasswordAndGenerateToken({ email, password });
        
        // Get user data for response
        const userData = await user.findOne({ email }).select('-password -salt');
        
        console.log("Login success\nJWT Token: "+token);
        
        // Set cookie with proper options
        return res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }).json({ 
            msg: "Login Successful",
            JWT_Token: token,
            user: userData
        });
        
    } catch(err) {
        res.json({
            error: err.message,
        })
    }
}

export default { Signup, Login };