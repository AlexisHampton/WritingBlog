import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/mongodb.js";
import userRoutes from "./routes/userRoutes.js"
import storyRoutes from "./routes/storyRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173"
        })
    );
}
app.use("/api/users", userRoutes);
app.use("/api/stories", storyRoutes);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

connectDB().then(() => {
    app.listen(5001, (req, res) => {
        console.log("Listenting on 5001");
    });
});
