import mongoose from "mongoose";

const BusSchema = mongoose.Schema({
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
    ref: 'BusRoute',
    required: true
  },
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