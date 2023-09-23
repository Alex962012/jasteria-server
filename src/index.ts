import express from "express";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import cors from "cors";
import { productsRoute } from "./routes/products-router";
import { authRoute } from "./routes/authRouter";
import { newProductsRoute } from "./routes/newProductsRoute";
mongoose
  .connect(
    "mongodb+srv://alex96201296:nissan12@cluster0.m1rouyv.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err) => console.log("db error", err));

const app = express();
const port = process.env.PORT || 5000;
const parserMiddleware = bodyParser({});
app.use(parserMiddleware);
app.use(express.json());
app.use(cors());

app.use("/newProducts", newProductsRoute);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
