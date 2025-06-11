import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/mongodb.js";
import userRoutes from "./routes/userRoutes.js"
import storyRoutes from "./routes/storyRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use("/api/users", userRoutes);
app.use("/api/stories", storyRoutes);


connectDB().then(() => {
    app.listen(5001, (req, res) => {
        console.log("Listenting on 5001");
    });
});
