import { Router, Request, Response } from "express";
import { productsRepository } from "../repositories/products-repository";
import { products } from "../products";
export const productsRoute = Router({});

productsRoute.get("/", (req: Request, res: Response) => {
  const productTypeName = productsRepository.getProductByTypeName(
    Number(req.query.typeName)
  );
  const productTypeYarn = productsRepository.getProductByTypeYarn(
    Number(req.query.typeYarn)
  );

  const productSeason = productsRepository.getProductSeason(
    Number(req.query.season)
  );

  if (req.query.typeName && req.query.typeYarn && req.query.season) {
    const result = productsRepository.getProductYarnNameSeason(
      Number(req.query.typeName),
      Number(req.query.typeYarn),
      Number(req.query.season)
    );
    res.send(result);
  } else if (req.query.typeName && req.query.season) {
    const result = productsRepository.getProductNameSeason(
      Number(req.query.typeName),
      Number(req.query.season)
    );
    res.send(result);
  } else if (req.query.typeYarn && req.query.season) {
    const productTypeYarnAndSeason =
      productsRepository.getProductByTypeYarnAndSeason(
        Number(req.query.typeYarn),
        Number(req.query.season)
      );
    res.send(productTypeYarnAndSeason);
  } else if (req.query.typeName && req.query.typeYarn) {
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
  } else if (req.query.season) {
    res.send(productSeason);
  } else {
    res.send(products);
  }
});
