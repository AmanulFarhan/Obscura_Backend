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
    type: String,
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