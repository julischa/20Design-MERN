import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  //inclide passwords in the model
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
