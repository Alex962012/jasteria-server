import Season from "../models/Season.js";
export const getAll = async (req:any, res:any) => {
    try {
        const season = await Season.find({});
        res.json(season);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Не удалось получить сезоны" });
    }
}
export const add = async (req:any, res:any) => {
    try {
        const { name } = req.body;
        const  season = new Season({ name });
        const result = await season.save();
        return res.json(result);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось создать сезон" });
    }
};
export const remove = async (req:any, res:any) => {
    try {
        const postId = req.params.id;
        try {
          await Season.findOneAndDelete({
            _id: postId,
          });
          res.json({ message: postId });
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "Error" });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось удалить сезон" });
    }
};