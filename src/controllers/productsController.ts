import Product from "../models/Products.js";
import { productsRepository } from "../repositories/products-repository.js";

export const getAll = async (req: any, res: any) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось получить товары" });
  }
};

export const add = async (req: any, res: any) => {
  try {
    const newProduct = new Product({
      imageUrl: req.body.imageUrl,
      title: req.body.title,
      price: req.body.price,
      season: req.body.season,
      images: req.body.images,
      description: req.body.description,
      typeYarn: req.body.typeYarn,
      typeName: req.body.typeName,
    });
    const result = await newProduct.save();
    res.json({ message: "Товар добавлен" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось добавить товар" });
  }
};
export const update = async (req: any, res: any) => {
  const postId = req.params.id;
  try {
    const post = await Product.updateOne(
      {
        _id: postId,
      },
      {
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        price: req.body.price,
        season: req.body.season,
        images: req.body.images,
        description: req.body.description,
        typeYarn: req.body.typeYarn,
        typeName: req.body.typeName,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      message: "Не удалось обновить продукт",
    });
  }
};

export const remove = async (req: any, res: any) => {
  const postId = req.params.id;
  try {
    await Product.findOneAndDelete({
      _id: postId,
    });
    res.json({ message: postId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

export const filter = async (req: any, res: any) => {
  const season = Number(req.query.season);
  const typeName = Number(req.query.typeName);
  const typeYarn = Number(req.query.typeYarn);
  let find;
  try {
    if (season === 0 && typeName === 0 && typeYarn === 0) {
      find = await Product.find({});
    }
    if (season > 0 && typeName === 0 && typeYarn === 0) {
      find = await Product.find({ season });
    }
    if (season > 0 && typeName > 0 && typeYarn === 0) {
      find = await Product.find({ season, typeName });
    }
    if (season > 0 && typeName > 0 && typeYarn > 0) {
      find = await Product.find({ season, typeName, typeYarn });
    }
    if (season > 0 && typeYarn > 0 && typeName === 0) {
      find = await Product.find({ season, typeYarn });
    }
    if (typeName > 0 && season === 0 && typeYarn === 0) {
      find = await Product.find({ typeName });
    }
    if (typeName > 0 && typeYarn > 0 && season === 0) {
      find = await Product.find({ typeName, typeYarn });
    }
    if (typeYarn > 0 && typeName === 0 && season === 0) {
      find = await Product.find({ typeYarn });
    }

    res.json(find);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};
