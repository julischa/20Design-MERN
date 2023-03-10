import User from "../models/userModel.js";
import { v2 as cloudinary } from "cloudinary";
import { comparePasswords, hashedPasword } from "../utils/bcrypt.js";
import generateToken from "../utils/generateToken.js";
import postModel from "../models/postModel.js";

//NOTE get all users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

//NOTE  create users
const signup = async (req, res) => {
  console.log("req", req.body);
  if (!req.body.email) {
    res.status(501).json({
      msg: "Error - invalid email",
    });
    return;
  }
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
      const mixedPassword = await hashedPasword(req.body.password);
      console.log("mixedPassword", mixedPassword);

      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: mixedPassword, //NOTE hashedPassword
      });
      const savedUser = await newUser.save();
      res.status(201).json({ message: "User created successfully", savedUser });
    }
  } catch (error) {
    console.log("error :>> ", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

//NOTE sign in
const login = async (req, res) => {
  // console.log("login request arrived");
  //console.log("req.body", req.body);
  console.log("req.body", req.body);

  if (!req.body.email) {
    res.status(501).json({
      msg: "Error - invalid email",
    });
    return;
  }

  //1. check if user exist in database
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    console.log("existingUser", existingUser);

    if (!existingUser) {
      res
        .status(500)
        .json({ msg: "do you have an account? if not, register first" });
    } else {
      // verify the password coming in the request (req.body.password), with the user's password in the database (which is the existingUser.password)

      const correctPassword = await comparePasswords(
        req.body.password,
        existingUser.password
      );
      if (!correctPassword) {
        res.status(401).json({
          msg: "Error - incorrect password",
        });
        return;
      }

      const token = generateToken(existingUser._id);

      const user = {
        userName: existingUser.userName,
        email: existingUser.email,
        image: existingUser.image,
        joined: existingUser.createdAt,
      };

      res.status(200).json({
        msg: "Successfully logged in",
        user,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Fatal error",
    });
  }
};

//NOTE img upload
const imageUpload = async (req, res) => {
  // console.log("req", req.file);
  console.log("req.body:::", req.body);
  // console.log("req.body:::", req.body.title);
  //1.multer send us the location of the image inside req.file
  // console.log("req.file", req.file);

  try {
    //2.upload picture to cloudinary, by providing the req.file.path (the location of the image in our computer)
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "posts",
    });
    console.log("result", result);
    if (result) {
      console.log("result url", result.url);
      const post = new postModel({
        picture: result.url,
        title: req.body.title,
        description: req.body.description,
      });

      try {
        const savedPost = await post.save();

        // const savedPost = await post.save()
        // console.log("result", result);
        //once we get the url from cloudinary (result.public_id , resul.url ...or other urls provided by cloudinary)
        //3. send image to the client
        res.status(200).json({
          // msg: "Image upload successful",
          // url: result.url,
          // img_id: result.public_id,
          msg: "Image upload successful",
          savedPost,
        });
      } catch (error) {
        res.status(500).json({ msg: "error trying to post a new post" });
      }
    } else {
      res.status(500).json({ msg: "error trying to upload the image" });
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "Error uploading image", error: error });
  }
};

export { getAllUsers, signup, imageUpload, login };
