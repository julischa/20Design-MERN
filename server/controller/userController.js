import User from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    console.log("error :>> ", error);
  }
};

//create signup function

//1. check if the user already exists ( User.findOne({email:req.body.email}))
//2.if the user Exists in the database, return an according response
//3.if the user Does not exists  , we save in the DB (we create a new User object, using the model : const newUser = new User // newUser.save(), and send accoring respnse to client.

export { getAllUsers };
