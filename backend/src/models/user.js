import mongoose, { mongo } from "mongoose";
import Story, { storySchema } from "./Story.js";

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        stories: {
            type: [storySchema],
            required: false
        }

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;