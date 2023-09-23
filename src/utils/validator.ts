import { body } from "express-validator";

export const productValidation = [
  body("imageUrl", "Укажите ссылку на изображение").isURL(),
  body("title", "Укажите название товара").isLength({ min: 3 }),
  body("price", "Укажите цену товара").isLength({ min: 2 }),
  body("season", "Укажите сезон").isLength({ min: 1 }),
  body("images", "Укажите ссылки на изображения"),
  body("description", "Укажите описание").isLength({ min: 5 }),
  body("typeYarn", "Укажите тип прямжи").isLength({ min: 1 }),
  body("typeName", "Укажите тип товара").isLength({ min: 1 }),
];
