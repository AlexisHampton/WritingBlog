import Story from "../models/Story.js";

export async function getAllStories(req, res) {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
}

export async function getStoryByID(req, res) {
    try {
        const { id } = req.params;
        const story = await Story.findById(id);

        if (!story) {
            res.status(404).json({ message: "Story not found" });
            return;
        }
        res.status(200).json(story);

    } catch (error) {
        console.log("Cannot find story by id", error);
        res.status(500).json({ message: "Internal Server error" });

    }
}

export async function createNewStory(req, res) {
    try {
        const { title, blurb, text, userID, author } = req.body;
        const newStory = new Story({ title, blurb, text, userID, author });
        const savedStory = await newStory.save();
        res.status(200).json(savedStory);

    } catch (error) {
        console.log("Cannot create new story", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateStory(req, res) {
    try {
        const { id } = req.params;
        const { title, blurb, text } = req.body;
        const updatedStory = await Story.findByIdAndUpdate(id, { title, blurb, text }, { new: true });
        if (!updatedStory) {
            return res.status(404).json({ message: "Cannot find story" });
        }
        res.status(200).json(updatedStory);
    } catch (error) {
        console.log("Cannot update story");
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteStory(req, res) {
    try {
        const deletedStory = await Story.findByIdAndDelete(req.params.id);

        if (!deletedStory) {
            return res.status(404).json({ message: "Cannot find story" });
        }

        res.status(200).json({ message: "Deleted story" });
    } catch (error) {
        console.log("Cannot delete story", error);
        res.status(500).json({ message: "Internal server error" });
    }
}