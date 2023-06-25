import { Router, Request, Response } from "express";
import { productsRepository } from "../repositories/products-repository";
import { products } from "../products";
export const productsRoute = Router({});

// productsRoute.get("/", (req: Request, res: Response) => {
//   const findProducts = productsRepository.findProducts(
//     req.query.title?.toString()
//   );
//   res.send(findProducts);
// });

// productsRoute.get("/:id", (req: Request, res: Response) => {
//   const product = productsRepository.getProductById(+req.params.id);
//   if (product) {
//     res.send(product);
//   } else res.send(404);
// });

// productsRoute.get("/:typeProduct", (req: Request, res: Response) => {
//   const product = productsRepository.getProductByTypeProduct(
//     +req.params.typeProduct
//   );
//   if (product) {
//     res.send(product);
//   } else res.send(404);
// });

productsRoute.get("/", (req: Request, res: Response) => {
  let foundProduct = products;
  const productTypeProduct = productsRepository.getProductByTypeProduct(
    Number(req.query.typeProduct)
  );
  const productTypeYarn = productsRepository.getProductByTypeYarn(
    Number(req.query.typeYarn)
  );
  console.log(req.query);
  if (req.query.typeProduct && req.query.typeYarn) {
    const productTypeYarnAndProduct =
      productsRepository.getProductByTypeYarnAndProduct(
        Number(req.query.typeProduct),
        Number(req.query.typeYarn)
      );

    res.send(productTypeYarnAndProduct);
  } else if (req.query.typeProduct) {
    res.send(productTypeProduct);
  } else if (req.query.typeYarn) {
    res.send(productTypeYarn);
  } else {
    res.send(products);
  }
});
