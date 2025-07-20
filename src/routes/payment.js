import express from 'express';
import razorpay from '../utils/razorpay.js';
const router = express.Router();

router.post('/createOrder', async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // Razorpay expects amount in paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Order creation error", err);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

export default router;
