import { Router } from "express";
import userController from "../controllers/userController.js";
import BusStop from '../models/bus_stop.js';
import Bus from "../models/bus.js";

const { Profile } = userController;

const router = Router();

router.get("/profile", Profile);

router.get("/busesInRoute", async (req, res) => {
  const source = req.query.source;
  const destination = req.query.destination;
  console.log("Source:", source, "Destination:", destination);

  if (!source || !destination) {
    return res.status(400).json({ error: "Source and destination are required" });
  }

  try {
    
    const buses = await Bus.find({ start: source, end: destination });
    console.log(buses);

    if (buses.length === 0) {
  return res.status(404).json({
    message: "No buses found for the given source and destination"
  });
}

return res.json({
  buses,
  message: "Buses found"
});

    // For now, return a mock response since you don't have bus routes set up yet
    const mockBuses = [
      {
        busNumber: "101",
        busName: "City Express",
        departureTime: "10:30 AM",
        arrivalTime: "11:30 AM",
        fare: 25
      },
      {
        busNumber: "202", 
        busName: "Metro Link",
        departureTime: "11:00 AM",
        arrivalTime: "12:00 PM",
        fare: 30
      }
    ];

    // Send response
    res.json({
      buses: mockBuses,
      source: sourceStop,
      destination: destinationStop
    });

  } catch (err) {
    console.error("Error fetching common buses:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;