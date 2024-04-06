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


export const bookCarService = async (carId) => {
try {

        res.redirect('https://payment-gateway.com')
        // const cars = await Cars.findOneAndUpdate({  });

        return updatedCar
    }
    catch(error) {
      console.log(error);
      throw new APIError("BAD_REQUEST",HttpStatusCode.BAD_REQUEST,true,"Provide right inputs");
    }
};



