import mongoose from "mongoose";
import { createHmac, randomBytes } from "crypto";
import { createTokenForUser } from "../../services/authentication.js";

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
    minlength: 4
  },
  salt: {
    type: String,
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
  // role: {
  //   type: String,
  //   enum: ['user', 'conductor', 'admin'],
  //   default: 'user'
  // },
  // // For conductors - assigned bus
  // assignedBus: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Bus'
  // },
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

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString("hex");
    console.log(salt);
    const hashedPassword = createHmac("sha256", salt)
        .update(user.password)
        .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

userSchema.static("matchPasswordAndGenerateToken", async function({ email,password }) {
    const user = await this.findOne({ email });
    console.log(user);
    if (!user) throw new Error("User not found");

    const salt = user.salt;
    console.log(salt);
    const hashedPassword = user.password;
    const userProvidedHash = createHmac("sha256", salt)
        .update(password)
        .digest("hex");
    console.log(hashedPassword + "\n" + userProvidedHash);
    if ( hashedPassword !== userProvidedHash )
        throw new Error("Incorrect Password");

    const token = createTokenForUser(user);
    return token;
});

const user = mongoose.model("user",userSchema);

export default user;