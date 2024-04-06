import express from 'express'
import { addCarController } from '../controllers/registerCarController.js'

import { adminAuth } from '../middlewares/auth.js'

const router = express.Router()

// Add user
router.post('/registercar', [adminAuth], addCarController) 

export default router