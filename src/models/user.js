import mongoose from "mongoose";

// User Schema - Enhanced for role-based access and booking features
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'conductor', 'admin'],
    default: 'user'
  },
  // For conductors - assigned bus
  assignedBus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus'
  },
  tickets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ticket'
  }],
  transactionHistory: [{
    ticketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket'
    },
    amount: Number,
    paymentMethod: {
      type: String,
      enum: ['card', 'upi', 'wallet', 'cash']
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    transactionDate: {
      type: Date,
      default: Date.now
    },
    transactionId: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const user = mongoose.model("user",userSchema);

export default user;