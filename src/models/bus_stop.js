import mongoose from "mongoose";

// Bus Stop Schema - Enhanced with location data and bus timing details
const busStopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  stopCode: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    street: String,
    area: String,
    city: String,
    state: String,
    pincode: String
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  // Bus schedules at this stop
  busSchedules: [{
    busId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bus',
      required: true
    },
    routeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BusRoute',
      required: true
    },
    scheduledTimes: [String], // Array of time strings like ["07:30", "09:15", "11:00"]
    direction: {
      type: String,
      enum: ['up', 'down'], // up = towards terminal, down = from terminal
      required: true
    },
    stopSequence: Number // Order of this stop in the route
  }],
  facilities: [String], // ["shelter", "seating", "digital_display", "wheelchair_accessible"]
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Create geospatial index for location-based queries
busStopSchema.index({ location: '2dsphere' });

const BusStop = mongoose.model("BusStop",busStopSchema);

export default BusStop;