import express from 'express'
import { addUserController  } from '../controllers/userRegisterController.js'

import { adminAuth } from '../middlewares/auth.js'

const router = express.Router()

// Add user
router.post('/registeruser',  addUserController) 

export default router