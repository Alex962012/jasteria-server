import pkg from 'express';
const { Router } = pkg;
export const seasonRoute = Router({});

import {  getAll, add } from "../controllers/seasonsController.js";
seasonRoute.post("/add", add);
seasonRoute.get("/getAll",  getAll);