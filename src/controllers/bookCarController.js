import { getAllCarservice } from "../services/bookCarServices.js"
// import { encryptData } from "../helpers/encryption/encryption.js";

export const getAllCarController = async (req, res, next) =>{
    try {
        const {cars,count} = await getAllCarservice();
        if (cars) {
            return res.status(200).json({ msg: 'Success', cars,count});
        } else {
            return res.status(404).json({ msg: 'Cars not found' });
        }

    } catch (error) {
        next(error);
    }
};
export const bookCarController = async (req, res, next) =>{
    try {
        carId = req.body._id;

        const result = await bookCarService(carId);
        if (result) {
            return res.status(200).json({ msg: 'Success, Car booked', result});
        } else {
            return res.status(404).json({ msg: 'Cars not found' });
        }

    } catch (error) {
        next(error);
    }
};