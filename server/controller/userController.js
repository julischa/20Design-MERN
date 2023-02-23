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
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    console.log("existingUser", existingUser);
    //if the user exists, return a response
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    } else {
      //if the user does not exist, : 1st: hash user's password, 2nd: save the new user in the DB

      // Hash user's password
      const mixedPassword = await hashedPasword(req.body.password);
      console.log("mixedPassword", mixedPassword);

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
  //1.multer send us the location of the image inside req.file
  console.log("req.file", req.file);

  try {
    //2.upload picture to cloudinary, by providing the req.file.path (the location of the image in our computer)
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "design/user",
    });

    console.log("result", result);
    //once we get the url from cloudinary (result.public_id , resul.url ...or other urls provided by cloudinary)
    //3. send image to the client
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

const login = async (req, res) => {
  // console.log("login request arrived");
  console.log("req.body", req.body);

  //1. check if user exist in database
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    console.log("existingUser", existingUser);

    if (!existingUser) {
      res
        .status(500)
        .json({ msg: "do you have an account? if not, register first" });
    }
  } catch {}
};

export { getAllUsers, signup, imageUpload, login };
