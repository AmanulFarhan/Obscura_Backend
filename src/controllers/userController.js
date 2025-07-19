import user from "../models/user.js";

const Profile = (req, res) => {
    console.log(req.user);
    res.json({ user: req.user });
}

export default { Profile };