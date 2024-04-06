import express from 'express'
import { getAllCarController} from '../controllers/bookCarController.js'
import { paymentController} from '../controllers/bookCarController.js'

// import { adminAuth } from '../middlewares/auth.js'

const router = express.Router()

// Add user

router.get('/getallcars',  getAllCarController)  //[adminAuth]
router.post('/getallcars/payment', paymentController)  //[adminAuth],

export default router