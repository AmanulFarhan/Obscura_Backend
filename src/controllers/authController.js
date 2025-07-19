


const Signup = (req, res) => {
    const { name, email, password } = req.body;
    res.json({msg: "Signup Working Successfully", data: req.body});
};

export default Signup;