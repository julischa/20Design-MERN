import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const User = mongoose.model("Designer", designerSchema);
export default User;
