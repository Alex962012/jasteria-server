import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  season: {
    type: Number,
  },
  images: [{ type: String }],
  description: {
    type: String,
  },
  typeYarn: {
    type: Number,
  },
  typeName: {
    type: Number,
  },
});
export default mongoose.model("Product", ProductSchema);
