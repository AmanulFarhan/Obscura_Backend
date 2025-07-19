import { validateToken }  from "../../services/authentication.js";

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];//Use CookieParser
       
        if (!tokenCookieValue) {
            return next(); 
        }

        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
        } catch (error) {
            return res.json({error: "Problem"});
        }

        return next();
    };
}

export { checkForAuthenticationCookie };