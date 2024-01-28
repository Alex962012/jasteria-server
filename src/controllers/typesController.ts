import Type from "../models/Types.js";
export const getAll = async (req:any, res:any) => {
    try {
        const types = await Type.find({});
        res.json(types);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Не удалось получить типы изделий " });
    }
}
export const add = async (req:any, res:any) => {
    try {
        const { name } = req.body;
        const type = new Type({ name });
        const result = await type.save();
        return res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось создать тип товара" });
    }
};
export const remove = async (req:any, res:any) => {
    try {
        const postId = req.params.id;
        try {
          await Type.findOneAndDelete({
            _id: postId,
          });
          res.json({ message: postId });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Error" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось удалить товар" });
    }
};