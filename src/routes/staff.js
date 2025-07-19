import { Router } from "express";
import { addBus } from "../controllers/staffController.js";
import Bus from "../models/bus.js";
import ticket from "../models/Ticket.js";

const router = Router();

router.post("/bus", addBus);

router.get("/bus/:id", async(req, res) => {
    const bus = await Bus.findOne({ BusNumber: req.params.id });
    const tickets = await ticket.find({ busId: bus._id }).populate("userId");
    return res.json(tickets);
});

export default router;