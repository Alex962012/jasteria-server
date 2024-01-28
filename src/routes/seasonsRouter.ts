import pkg from 'express';
const { Router } = pkg;
export const seasonRoute = Router({});

import {  getAll, add, remove } from "../controllers/seasonsController.js";
seasonRoute.post("/add", add);
seasonRoute.get("/getAll",  getAll);
seasonRoute.delete("/remove/:id", remove)