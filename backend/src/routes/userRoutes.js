import express from "express";
import { createNewUser, getAllUsers, getUserByEmailPass, getUserByID } from "../controllers/userController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.get("/login/", getUserByEmailPass);

router.post("/", createNewUser);

export default router;