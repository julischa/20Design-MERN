import postModel from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await postModel.find({});
    res.status(200).json({
      allPosts,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Fatal error while fetching posts",
    });
  }
};
