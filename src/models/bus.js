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
  // routeId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'BusRoute',
  //   required: true
  // },
  regions: [],
  trip: {
   route1Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusRoute',
    required: true,
    Startings: [{type: String}]
    },
   route2Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusRoute',
    required: true,
    Startings: [{type: String}]
    },
    Repetition: Number, 
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