import { userLoginService } from "../services/userAuthServices.js"

export const userLoginController = async (req, res, next) => {
    try {
        let { email, password } = req.body

        let result = await userLoginService(email.toLowerCase(), password)

        return res.status(200).json({ msg: 'Success', result })
    } catch (error) {
        next(error);
    }
}