import { registerCarService } from "../services/registerCarServices.js"
// import { encryptData } from "../helpers/encryption/encryption.js";

export const addCarController = async (req, res, next) =>{
    try {
        console.log("reqbody:", req.body);
        const userId = req.body.userId
        const { name,email, cartype, carmodel, carno, starttime, endtime } = req.body
        const objToInsert = {
            name: name,
            email: email,
            cartype: cartype,
            carmodel: carmodel,
            carno: carno,
            starttime: starttime,
            endtime: endtime,
            createdBy: userId,
        }

        const result = await registerCarService(objToInsert);
        if (result) {
            return res.status(200).json({ msg: 'Success', result });
        } else {
            return res.status(404).json({ msg: 'Car not added' });
        }

    } catch (error) {
        next(error);
    }
};