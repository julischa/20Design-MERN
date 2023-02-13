import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  //include passwords in the model;
  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  profilePic: {
    type: String,
    required: false,
    unique: false,
  },
  img_id: {
    type: String,
    required: false,
    unique: false,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
