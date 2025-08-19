import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/mongodb.js";
import userRoutes from "./routes/userRoutes.js"
import storyRoutes from "./routes/storyRoutes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
    app.use(
        cors({
            origin: "http://localhost:5173"
        })
    );
}
app.use(express.json());

//To deal with CORS issue
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});


app.use("/api/users", userRoutes);
app.use("/api/stories", storyRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, (req, res) => {
        console.log("Listenting on ", PORT);
    });
});
