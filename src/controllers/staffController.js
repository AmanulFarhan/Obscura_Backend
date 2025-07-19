import bus from "../models/bus.js";

const ShowAllBuses = (req, res) => {
   
    console.log("All Buses....");
    res.json({ bus1: "mss", bus2: "nelson", bus3: "nithin-bus" });
}

export { ShowAllBuses };