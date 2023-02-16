import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import { hashedPasword } from "../utils/bcrypt.js";

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
      //if the user does not exist, : 1st: hash user's password, 2nd: save the new user in the DB

      // Hash user's password
      const mixedPassword = await hashedPasword(req.body.password);
      console.log("mixedPassowrd", mixedPassword);

      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: mixedPassword,
      });
      const savedUser = await newUser.save();
      res.status(201).json({ message: "User created successfully", savedUser });
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

// image upload
const imageUpload = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "design/user",
    });
    res.status(200).json({
      msg: "Image upload successful",
      url: result.url,
      img_id: result.public_id,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "Error uploading image", error: error });
  }
};

export { getAllUsers, signup, imageUpload };
