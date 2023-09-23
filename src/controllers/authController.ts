import UserModal from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const generateAccessToken = (id: any) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: "24h",
  });
};

export const register = async (req: any, res: any) => {
  try {
    res.json("register");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось зарегистрироваться" });
  }
};
export const login = async (req: any, res: any) => {
  try {
    const { email, passwordHash } = req.body;
    const user = await UserModal.findOne({ email });
    if (!user) {
      return res
        .send(400)
        .json({ message: `Пользователь : ${email} не найден` });
    }
    const validPassword = bcrypt.compareSync(passwordHash, user.passwordHash);
    if (!validPassword) {
      return res.status(400).json({ message: `Неверный пароль` });
    }
    const token = generateAccessToken(user._id);
    return res.json({ token });
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Не удалось войти" });
  }
};

export const getUsers = async (req: any, res: any) => {
  try {
    // const hash = bcrypt.hashSync("nissan12@", 7);
    // const admin = new UserModal({
    //   fullName: "admin",
    //   email: "alex.86@mail.ru",
    //   passwordHash: hash,
    // });
    // await admin.save();
    // res.json("save");
    res.json("ss");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось зарегистрироваться" });
  }
};
