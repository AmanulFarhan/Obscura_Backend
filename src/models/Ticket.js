import mongoose from "mongoose";

const ticketschema = new mongoose.Schema({});

const ticket = mongoose.model("ticket",ticketschema);

export default ticket;