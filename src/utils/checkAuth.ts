import jwt from "jsonwebtoken";
export default (req: any, res: any, next: any) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoder: any = jwt.verify(token, "secret123");
      req.userId = decoder._id;
      next();
    } catch (err) {
      return res.status(403).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
