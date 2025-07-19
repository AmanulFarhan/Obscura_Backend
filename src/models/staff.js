import mongoose from "mongoose";

const StaffSchema = mongoose.Schema({
  staffName: {
    type: String,
    required: true,
  },
  staffPhoneNumber: {
    type: String,
    required: true,
  },
  staffEmailId: {
    type: String,
    unique: true,
    required: true
  },
  assignedBus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bus'
    },
    Age: {
      type: String,
    }
});