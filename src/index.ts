import express from "express";
import "dotenv/config";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";

import { fileURLToPath } from "url";
import { dirname } from "path";
import fileUpload from "express-fileupload";

import { authRoute } from "./routes/authRouter.js";
import { typesRoute } from "./routes/typesRouter.js";
import { yarnsRoute } from "./routes/yarnsRouter.js";
import { seasonRoute } from "./routes/seasonsRouter.js";
import { newProductsRoute } from "./routes/newProductsRoute.js";

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/images", express.static(__dirname + "/images"));
app.use(fileUpload({}));
app.use(express.json());
// app.use(upload.array());
app.use(cors());

app.use("/api/newProducts", newProductsRoute);
app.use("/api/auth", authRoute);
app.use("/api/type", typesRoute);
app.use("/api/season", seasonRoute);
app.use("/api/yarn", yarnsRoute);
const start = async () => {
  try {
    mongoose
      .connect(
        // "mongodb+srv://alex96201296:nissan12@cluster0.m1rouyv.mongodb.net/blog?retryWrites=true&w=majority"
        "mongodb://localhost/test"
      )
      .then(() => console.log("db ok"))
      .catch((err) => console.log("db error", err));
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
      console.log(__dirname);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
