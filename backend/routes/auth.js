import express  from "express";
import {login, register} from "../controllers/authController.js";


const router = express.Router()

router.post('/register', register)  // "/api/v1/auth/register"
router.post('/login', login)


export default router;