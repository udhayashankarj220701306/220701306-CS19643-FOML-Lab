import express from "express";
import { logIn, logOut, profile,updateUserData ,signUp, refreshToken } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();



router.post("/signup",signUp);
router.post("/login",logIn);
router.post("/logout",logOut);
router.post("/refresh-token",refreshToken);
router.get("/profile",protectRoute,profile);
router.patch("/user/:id",updateUserData);

export default router;