import pkg from 'express';
const { Router } = pkg;
export const yarnsRoute = Router({});

import {  getAll, add } from "../controllers/yarnsController.js";
yarnsRoute.post("/add", add);
yarnsRoute.get("/getAll",  getAll);