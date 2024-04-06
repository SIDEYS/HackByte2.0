import APIError, { HttpStatusCode } from "../exception/errorHandler.js";
import User from "../models/userModel.js";


export const createUserService = async (userData) => {
  try {
    console.log(userData);
    const newUser = await User.create(userData);
    if (newUser) {
      return newUser;
    }
  } catch (error) {
    console.log(error);
    throw new APIError("BAD_REQUEST",HttpStatusCode.BAD_REQUEST,true,"Provide right inputs");
  }
};