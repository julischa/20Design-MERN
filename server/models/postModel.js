import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
  picture: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});
const postModel = mongoose.model("post", postSchema);
export default postModel;
