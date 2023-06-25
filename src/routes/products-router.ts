import { Router, Request, Response } from "express";
import { productsRepository } from "../repositories/products-repository";
import { products } from "../products";
export const productsRoute = Router({});

productsRoute.get("/", (req: Request, res: Response) => {
  let foundProduct = products;
  const productTypeName = productsRepository.getProductByTypeName(
    Number(req.query.typeName)
  );
  const productTypeYarn = productsRepository.getProductByTypeYarn(
    Number(req.query.typeYarn)
  );
  console.log(req.query);
  if (req.query.typeName && req.query.typeYarn) {
    const productTypeYarnAndName =
      productsRepository.getProductByTypeYarnAndName(
        Number(req.query.typeName),
        Number(req.query.typeYarn)
      );

    res.send(productTypeYarnAndName);
  } else if (req.query.typeName) {
    res.send(productTypeName);
  } else if (req.query.typeYarn) {
    res.send(productTypeYarn);
  } else {
    res.send(products);
  }
});
