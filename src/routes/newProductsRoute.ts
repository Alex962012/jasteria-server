import { Router, Request, Response } from "express";

export const newProductsRoute = Router({});

import {
  add,
  update,
  remove,
  getAll,
  filter,
} from "../controllers/productsController";
import { productValidation } from "../utils/validator";
newProductsRoute.get("/getAll", getAll);
newProductsRoute.post("/add", productValidation, add);
newProductsRoute.put("/update/:id", productValidation, update);
newProductsRoute.delete("/remove/:id", remove);
newProductsRoute.get("/filter", filter);
