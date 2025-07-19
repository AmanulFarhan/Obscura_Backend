import JWT from "jsonwebtoken";

const secret = "$uperman@123";


function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, secret);
    return payload;
}

export {
    createTokenForUser,
    validateToken,
};