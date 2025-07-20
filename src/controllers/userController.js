import user from "../models/user.js";

const Profile = (req, res) => {
    console.log(req.user);
    res.json({ user: req.user });
}

const generateRazorPay = (orderId, total) => {
        return new Promise((resolve, reject) => {
            
            var options = {
                amount: total * 100,
                currency: "INR",
                receipt: orderId, 
            };
            instance.orders.create(options, function(err, order) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("New Order: ", order);
                    resolve(order);
                }
                
            });
        });
    }

export default { Profile, generateRazorPay };