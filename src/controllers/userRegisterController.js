import { createUserService } from "../services/userServices.js"
import { encryptData } from "../helpers/encryption/encryption.js";

export const addUserController = async (req, res, next) =>{
    try {
        // console.log("reqbody:", req.body);
        // const userId = req.body.userId
        const { name,mobileNumber,email,password } = req.body
        const encryptedPassword = await encryptData(password);
        const objToInsert = {
            name: name,
            mobileNumber: mobileNumber, 
            email: email,
            password: encryptedPassword,
        }

        const result = await createUserService(objToInsert);
        if (result) {
            return res.status(200).json({ msg: 'Success', result });
        } else {
            return res.status(404).json({ msg: 'Admin not added' });
        }

    } catch (error) {
        next(error);
    }
};