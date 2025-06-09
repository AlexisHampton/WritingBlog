import express from "express";
import { createNewUser, getAllUsers, getUserByEmailPass, getUserByID, updateUser } from "../controllers/userController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/login", getUserByEmailPass);
router.get("/:id", getUserByID);

router.post("/", createNewUser);

router.put("/:id", updateUser)

export default router;