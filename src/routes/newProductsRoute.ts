import { Router, Request, Response } from "express";

export const newProductsRoute = Router({});

import {
  add,
  update,
  remove,
  getAll,
  filter,
} from "../controllers/productsController.js";
import { productValidation } from "../utils/validator.js";
newProductsRoute.get("/getAll", getAll);
newProductsRoute.post("/add", add);
newProductsRoute.put("/update/:id", productValidation, update);
newProductsRoute.delete("/remove/:id", remove);
newProductsRoute.get("/filter", filter);
