import User from "../models/userModel.js";
import mongoose from "mongoose";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

const signup = async (req, res) => {
  console.log("req", req);
  console.log("req", req.body);
  try {
    //check if the user already exists
    const existingUser = await User.findOne({ email: req.body.email });

    //if the user exists, return a response
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    } else {
      //if the user does not exist, save the new user in the DB

      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await newUser.save();
      res.status(201).json({ message: "User created successfully", savedUser });
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

// module.exports = { getAllUsers, signup };
export { getAllUsers, signup };
