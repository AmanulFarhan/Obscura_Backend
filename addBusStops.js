import mongoose from "mongoose";
import dotenv from "dotenv";
import BusStop from "./src/models/bus_stop.js";

dotenv.config();

async function addSampleBusStops() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");

        // Sample bus stops
        const sampleBusStops = [
            {
                name: "Chengannur",
                stopCode: "CGR001",
                address: {
                    street: "Main Road",
                    area: "Chengannur",
                    city: "Chengannur",
                    state: "Kerala",
                    pincode: "689121"
                },
                location: {
                    type: "Point",
                    coordinates: [76.6186, 9.3181] // [longitude, latitude]
                },
                busSchedules: [],
                facilities: ["shelter", "seating"],
                isActive: true
            },
            {
                name: "Mavelikara",
                stopCode: "MVL001",
                address: {
                    street: "Bus Stand Road",
                    area: "Mavelikara",
                    city: "Mavelikara",
                    state: "Kerala",
                    pincode: "690101"
                },
                location: {
                    type: "Point",
                    coordinates: [76.5528, 9.2497]
                },
                busSchedules: [],
                facilities: ["shelter", "seating", "digital_display"],
                isActive: true
            },
            {
                name: "Kollakadavu",
                stopCode: "KKD001",
                address: {
                    street: "Kollakadavu Junction",
                    area: "Kollakadavu",
                    city: "Kollakadavu",
                    state: "Kerala",
                    pincode: "690519"
                },
                location: {
                    type: "Point",
                    coordinates: [76.5201, 9.2123]
                },
                busSchedules: [],
                facilities: ["shelter"],
                isActive: true
            },
            {
                name: "Kottayam",
                stopCode: "KTM001",
                address: {
                    street: "KSRTC Bus Stand",
                    area: "Kottayam",
                    city: "Kottayam",
                    state: "Kerala",
                    pincode: "686001"
                },
                location: {
                    type: "Point",
                    coordinates: [76.5222, 9.5915]
                },
                busSchedules: [],
                facilities: ["shelter", "seating", "digital_display", "wheelchair_accessible"],
                isActive: true
            }
        ];

        // Check if bus stops already exist
        const existingStops = await BusStop.find({});
        console.log(`Found ${existingStops.length} existing bus stops`);

        if (existingStops.length === 0) {
            // Insert sample bus stops
            await BusStop.insertMany(sampleBusStops);
            console.log("Sample bus stops added successfully!");
        } else {
            console.log("Bus stops already exist, skipping insertion.");
        }

        // List all bus stops
        const allStops = await BusStop.find({});
        console.log("\nAll bus stops in database:");
        allStops.forEach(stop => {
            console.log(`- ${stop.name} (${stop.stopCode})`);
        });

    } catch (error) {
        console.error("Error:", error);
    } finally {
        await mongoose.connection.close();
        console.log("Connection closed");
    }
}

addSampleBusStops();
