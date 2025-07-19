import Bus from "../models/bus.js"

const getBuses = async function(req,res ) {
    const buses = await Bus.find({});
    return res.json(buses);
}

export { getBuses };