import Product from "../models/Products.js";

import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
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
    let imageUrl;
    let filenames;
    if (!req.files.imageUrl.length) {
      imageUrl = req.files.imageUrl;
      let fileName = uuidv4() + ".jpg";
      filenames = fileName;
      let uploadPath = path.resolve(__dirname, "..", "images", fileName);
      imageUrl.mv(uploadPath);
    }
    if (req.files.imageUrl.length > 1) {
      imageUrl = req.files.imageUrl;
      filenames = [];
      for (let i = 0; i < imageUrl.length; i++) {
        let fileName = uuidv4() + ".jpg";
        filenames.push(fileName);
        let uploadPath = path.resolve(__dirname, "..", "images", fileName);
        imageUrl[i].mv(uploadPath);
      }
    }
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      season: req.body.season,
      imageUrl: filenames,
      description: req.body.description,
      yarn: req.body.yarn,
      type: req.body.type,
      homePage: req.body.homePage,
      label: req.body.label,
    });
    const result = await newProduct.save();
    res.json(req.body.title);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось добавить товар" });
  }
};
export const update = async (req: any, res: any) => {
  const postId = req.params.id;
  const result = await Product.findById({
    _id: postId,
  });
  let image: any;
  if (result?.imageUrl.length === 1) {
    let fileName = result?.imageUrl[0];
    let uploadPath = path.resolve(__dirname, "..", "images", fileName);
    fs.unlink(uploadPath, (err: any) => {
      if (err) throw err; // не удалось удалить файл
      console.log("Файл успешно удалён");
    });
  } else {
    image = result?.imageUrl;
    for (let i = 0; i < image.length; i++) {
      let fileName: any = result?.imageUrl[i];
      let uploadPath = path.resolve(__dirname, "..", "images", fileName);
      fs.unlink(uploadPath, (err: any) => {
        if (err) throw err; // не удалось удалить файл
        console.log("Файл успешно удалён");
      });
    }
  }
  try {
    let imageUrl;
    let filenames;
    if (!req.files.imageUrl.length) {
      imageUrl = req.files.imageUrl;
      let fileName = uuidv4() + ".jpg";
      filenames = fileName;
      let uploadPath = path.resolve(__dirname, "..", "images", fileName);
      imageUrl.mv(uploadPath);
    }
    if (req.files.imageUrl.length > 1) {
      imageUrl = req.files.imageUrl;
      filenames = [];
      for (let i = 0; i < imageUrl.length; i++) {
        let fileName = uuidv4() + ".jpg";
        filenames.push(fileName);
        let uploadPath = path.resolve(__dirname, "..", "images", fileName);
        imageUrl[i].mv(uploadPath);
      }
    }
    const post = await Product.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        price: req.body.price,
        season: req.body.season,
        imageUrl: filenames,
        description: req.body.description,
        yarn: req.body.yarn,
        type: req.body.type,
        homePage: req.body.homePage,
        label: req.body.label,
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
  // const fileName = req;

  try {
    const result = await Product.findById({
      _id: postId,
    });
    let imageUrl: any;
    if (result?.imageUrl.length === 1) {
      let fileName = result?.imageUrl[0];
      let uploadPath = path.resolve(__dirname, "..", "images", fileName);
      fs.unlink(uploadPath, (err: any) => {
        if (err) throw err; // не удалось удалить файл
        console.log("Файл успешно удалён");
      });
    } else {
      imageUrl = result?.imageUrl;
      for (let i = 0; i < imageUrl.length; i++) {
        let fileName: any = result?.imageUrl[i];
        let uploadPath = path.resolve(__dirname, "..", "images", fileName);
        fs.unlink(uploadPath, (err: any) => {
          if (err) throw err; // не удалось удалить файл
          console.log("Файл успешно удалён");
        });
      }
    }
    await Product.findOneAndDelete({
      _id: postId,
    });
    res.json({ message: "товар удален" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

export const filter = async (req: any, res: any) => {
  const season = req.query.season;
  const type = req.query.type;
  const yarn = req.query.yarn;
  let find;
  try {
    if (season == 0 && type == 0 && yarn == 0) {
      find = await Product.find({});
    }
    if (season != 0 && type == 0 && yarn == 0) {
      find = await Product.find({ season });
    }
    if (season != 0 && type != 0 && yarn == 0) {
      find = await Product.find({ season, type });
    }
    if (season != 0 && type != 0 && yarn != 0) {
      find = await Product.find({ season, type, yarn });
    }
    if (season != 0 && yarn != 0 && type == 0) {
      find = await Product.find({ season, yarn });
    }
    if (type != 0 && season == 0 && yarn == 0) {
      find = await Product.find({ type });
    }
    if (type != 0 && yarn != 0 && season == 0) {
      find = await Product.find({ type, yarn });
    }
    if (yarn != 0 && type == 0 && season == 0) {
      find = await Product.find({ yarn });
    }

    res.json(find);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};
