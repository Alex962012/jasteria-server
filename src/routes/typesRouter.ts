import pkg from 'express';
const { Router } = pkg;
export const typesRoute = Router({});

import {  getAll, add } from "../controllers/typesController.js";
typesRoute.post("/add", add);
typesRoute.get("/getAll",  getAll);