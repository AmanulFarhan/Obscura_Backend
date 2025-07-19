import mongoose from "mongoose";

// Bus Route Schema - Enhanced with detailed route information
const busRouteSchema = new mongoose.Schema({
  routeNumber: {
    type: String,
    required: true,
    unique: true
  },
  routeName: {
    type: String,
    required: true
  },
  origin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusStop',
    required: true
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusStop',
    required: true
  },
  // Ordered list of stops in the route
  stops: [{
    stopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BusStop',
      required: true
    },
    stopSequence: {
      type: Number,
      required: true
    },
    distanceFromOrigin: Number, // in kilometers
    estimatedTravelTime: Number // in minutes from origin
  }],
  // Fare structure
  fareStructure: [{
    fromStop: Number, // stop sequence
    toStop: Number,   // stop sequence
    fare: Number
  }],
  totalDistance: Number, // in kilometers
  estimatedDuration: Number, // in minutes
  operatingHours: {
    startTime: String, // "05:30"
    endTime: String,   // "23:00"
    frequency: Number  // in minutes
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const BusRoute = mongoose.model("BusRoute",busRouteSchema);

export default BusRoute;