import mongoose from "mongoose"

const connectToMongoUrl = async(url) => {
    await mongoose.connect(url);
}

export default connectToMongoUrl;