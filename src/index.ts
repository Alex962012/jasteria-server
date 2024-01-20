import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fileUpload from "express-fileupload";

import { authRoute } from "./routes/authRouter.js";
import { typesRoute } from "./routes/typesRouter.js";
import { yarnsRoute } from "./routes/yarnsRouter.js";
import { seasonRoute } from "./routes/seasonsRouter.js";
import { newProductsRoute } from "./routes/newProductsRoute.js";
import serverless from "serverless-http";
mongoose
  .connect(
    "mongodb+srv://alex96201296:nissan12@cluster0.m1rouyv.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("db ok"))
  .catch((err:any) => console.log("db error", err));




const app = express();
const port = process.env.PORT || 2000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)
app.use('/images', express.static(__dirname + '/images'));
app.use(fileUpload({}));
app.use(bodyParser.json())
// app.use(upload.array());
app.use(cors());

app.use("/api/newProducts", newProductsRoute);
app.use("/api/auth", authRoute);
app.use("/api/type", typesRoute);
app.use("/api/season", seasonRoute);
app.use("/api/yarn", yarnsRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
export const handler = serverless(app);