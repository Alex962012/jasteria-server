import mongoose from "mongoose";
const YarnSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },



});
export default mongoose.model("Yarn", YarnSchema);