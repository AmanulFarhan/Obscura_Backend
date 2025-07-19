import mongoose from "mongoose";

const ticketschema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    busId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bus",
    },
    source: {
        type: String,
    },
    destination: {
        type: String,
    },
    fare: {
        type: Number,
    },


});



const ticket = mongoose.model("ticket",ticketschema);

export default ticket;