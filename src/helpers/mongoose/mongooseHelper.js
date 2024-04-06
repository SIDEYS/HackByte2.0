import mongoose from "mongoose";

export const getObjectId = (id) => {
    const userId = new mongoose.Types.ObjectId();
    return userId;
}