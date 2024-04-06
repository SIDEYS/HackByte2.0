import { getAllCarservice } from "../services/bookCarServices.js"
// import { singleCarService } from "../services/bookCarServices.js"
// import { encryptData } from "../helpers/encryption/encryption.js";

export const getAllCarController = async (req, res, next) =>{
    try {
        const {cars,count} = await getAllCarservice();
        if (cars) {
            return res.status(200).json({ msg: 'Success gadi mil gayi', cars,count});
        } else {
            return res.status(404).json({ msg: 'Cars not found' });
        }

    } catch (error) {
        next(error);
    }
};

export const paymentController = async (req, res, next) =>{
    try {
        Stripe.customers.create(
            {
                email:req.body.stripeEmail,
                source: req.body.stripeToken,
            }
        )
        .then((customer) => {
            return stripe.charges.create({
                amount: 2000,
                currency: 'INR',
                customer: customer.id
            })
        })

    } catch (error) {
        next(error);
    }
};
