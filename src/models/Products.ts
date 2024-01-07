import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  imageUrl: [{ type: String }],
  title: {
    type: String,
  },
  price: {
    type: String,

  },
  season: {
    type: String,
  },
  yarn: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },

});
export default mongoose.model("Product", ProductSchema);
