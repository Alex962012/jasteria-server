import User from "../models/Users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret:string= "" +process.env.SECRET_KEY;
const generateJwt = (id:any, email:any) => {
    return jwt.sign(
        { id: id, email},
        secret,
        { expiresIn: '20h' })
}

export const registration = async (req:any, res:any) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(500).json({ message: "Не корректно указан емайл и пароль" });
        }
        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(500).json({ message: "Пользователь уже существует" });
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, password: hashPassword })
        const token = generateJwt(user.id, user.email)
        return res.json({token })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Не удалось создать пользователя" });
    }
};
export const login = async (req:any, res:any) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })//
        if (!user) {
            return res.status(500).json({ message: "Пользователь не найден" });
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return res.status(500).json({ message: "Неверный пароль" });
        }
        const token = generateJwt(user._id, user.email)
        return res.json({token })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не удалось авторизоваться" });
    }
};

export const check = async (req:any, res:any) => {
    try {

        res.json({ message: 'all' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Не задан id" });
    }
};