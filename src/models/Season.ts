import mongoose from "mongoose";
const SeasonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },



});
export default mongoose.model("Season", SeasonSchema);