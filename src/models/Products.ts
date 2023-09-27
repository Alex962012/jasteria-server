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
    type: String,
    required: true,
  },
  season: {
    type: String,
  },
  images: [{ type: String }],
  description: {
    type: String,
  },
  typeYarn: {
    type: String,
  },
  typeName: {
    type: String,
  },
});
export default mongoose.model("Product", ProductSchema);
