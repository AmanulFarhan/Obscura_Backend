import mongoose from "mongoose";

const BusSchema = new mongoose.Schema({
  BusName: {
    type: String,
    required: true
  },
  BusNumber: {
    type: Number,
    unique: true,
    required: true
  },
  routeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "busRoute",
  },
  status: {
    type: String,
    required: true,
    default: "Available",
  },
  ticket_id: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ticket",
    }
  ],
  // Staff details
  staff: {
    driver: {
      name: String,
      licenseNumber: String,
      phone: String
    },
    conductor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff'
    }
 }
});

const Bus = mongoose.model("Bus",BusSchema);

export default Bus;