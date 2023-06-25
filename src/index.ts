import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { productsRoute } from "./routes/products-router";
const app = express();
const port = process.env.PORT || 5000;

const parserMiddleware = bodyParser({});
app.use(parserMiddleware);

app.use("/products", productsRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
