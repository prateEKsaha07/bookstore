import express from "express";
import { signUp } from "../controller/user.controller.js";
import { login } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signUp", signUp);
router.post("/logIn", login);


export default router;