import Yarn from "../models/Yarns.js";
export const getAll = async (req:any, res:any) => {
    try {
        const yarns = await Yarn.find({});
        res.json(yarns);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Не удалось получить пряжу" });
    }
}
export const add = async (req:any, res:any) => {
    try {
        const { name } = req.body;
        const  yarn = new Yarn({ name });
        const result = await yarn.save();
        return res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось создать пряжу" });
    }
};
export const remove = async (req:any, res:any) => {
    try {
        const postId = req.params.id;
        try {
          await Yarn.findOneAndDelete({
            _id: postId,
          });
          res.json({ message: postId });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Error" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось удалить пряжу" });
    }
};