import Cars from "../models/carModel.js"
import APIError, { HttpStatusCode } from "../exception/errorHandler.js";

export const registerCarService = async (carData) => {
    try {
    //   console.log(carData);
      const newCar = await Cars.create(carData);
      if (newCar) {
        return newCar;
      }
    } catch (error) {
      console.log(error);
      throw new APIError("BAD_REQUEST",HttpStatusCode.BAD_REQUEST,true,"Provide right inputs");
    }
  };