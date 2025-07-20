import Razorpay from "razorpay";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

console.log("KEY_ID:", process.env.KEY_ID); // Debug log
console.log("KEY_SECRET:", process.env.KEY_SECRET ? "Present" : "Missing"); // Debug log

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,       // from Razorpay dashboard
  key_secret: process.env.KEY_SECRET,   // keep it secret!
});

export default razorpay;
