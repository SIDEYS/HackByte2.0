import Cars from "../models/carModel.js"
import APIError, { HttpStatusCode } from "../exception/errorHandler.js";

export const getAllCarservice = async () => {
try {
        const cars = await Cars.find({ status: "UNBOOKED" });
        const count = await Cars.countDocuments()
        return {cars,count};
    }
    catch(error) {
      console.log(error);
      throw new APIError("BAD_REQUEST",HttpStatusCode.BAD_REQUEST,true,"Provide right inputs");
    }
};


export const singleCarService = async (userId) => {
try {    
        const car = await Cars.findOne({ _id: userId });
        return car
    }
    catch(error) {
      console.log(error);
      throw new APIError("BAD_REQUEST",HttpStatusCode.BAD_REQUEST,true,"Provide right inputs");
    }
};



