import mongoose from "mongoose";
import User from "../models/user.js";

export async function getAllUsers(req, res) {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
}

export async function getUserByEmailPass(req, res) {
    try {
        const { email, password } = req.query;
        console.log(email, password);
        const user = await checkIfUserExists(email);
        if (!user || user.password !== password) {
            res.status(404).json({ message: "Account does not exist" });
            return;
        }
        else if (user.password !== password) {
            res.status(404).json({ message: "Password is incorrect" });
            return;
        }
        console.log("user ID", user._id.toString());
        res.status(200).json({ id: user._id.toString() });

    } catch (error) {
        console.log("Could not get specific user", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getUserByID(req, res) {
    try {
        const { id } = req.params;
        console.log("id", id);
        const user = await User.findById(id);
        if (!user)
            return res.status(404).json({ message: "User does not exist" });
        res.status(200).json(user);
    } catch (error) {
        console.log("Cannot get user", error);
    }
}

export async function createNewUser(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;
        const userExists = await checkIfUserExists(email);

        if (userExists) {
            res.status(400).json({ message: "Account already exists" });
            return;
        }

        const newUser = new User({ firstName, lastName, email, password });
        const savedUser = await newUser.save();
        res.status(201).json({ id: savedUser._id.toString() });

    } catch (error) {
        console.log("Could not save user", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

async function checkIfUserExists(email) {
    const users = await User.find();
    let userFound = null;
    users.forEach(user => {
        if (user.email === email) {
            userFound = user;
            return user;
        }
    });
    return userFound;
}

export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, password, stories } = req.body;

        console.log("stories:", stories, password);

        const updatedUser = await User.findByIdAndUpdate(id, { firstName, lastName, email, password, stories });


        if (!updatedUser)
            return res.status(404).json({ message: "User not found" });

        res.status(200).json(updatedUser);

    } catch (error) {
        console.log("Could not update user", error);
        res.status(500).json({ message: "Internal server error" });
    }
}