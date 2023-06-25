import { Router, Request, Response } from "express";
import { productsRepository } from "../repositories/products-repository";
export const productsRoute = Router({});

productsRoute.get("/", (req: Request, res: Response) => {
  const findProducts = productsRepository.findProducts(
    req.query.title?.toString()
  );
  res.send(findProducts);
});
