import mongoose from "mongoose";
const { Schema } = mongoose;

const designerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  birth: {
    type: Number,
    required: true,
  },
  death: {
    type: Number,
    required: false,
  },
});
const designerModel = mongoose.model("designer", designerSchema);
export default designerModel;
