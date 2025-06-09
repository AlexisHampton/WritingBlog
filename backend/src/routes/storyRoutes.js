import express from "express";
import { createNewStory, deleteStory, getAllStories, getStoryByID, updateStory } from "../controllers/storyController.js";

const storyRoutes = express.Router();

storyRoutes.get("/", getAllStories);
storyRoutes.get("/:id", getStoryByID);

storyRoutes.post("/", createNewStory);

storyRoutes.put("/:id", updateStory);

storyRoutes.delete("/:id", deleteStory);

export default storyRoutes;




