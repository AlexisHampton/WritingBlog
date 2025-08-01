import mongoose, { mongo } from "mongoose";

export const storySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        blurb: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        published: {
            type: Boolean,
            required: false
        }
    },
    { timestamps: true }
);

const Story = mongoose.model("Story", storySchema);
export default Story;