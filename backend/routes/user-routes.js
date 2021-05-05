import express from 'express'
import { authUser } from '../controllers/user-controller.js'
const router = express.Router()

//@route GET /api/users/login
router.post('/login', authUser)

export default router
