import { Router, Request, Response } from "express";
import { check } from "express-validator";
export const typesRoute = Router({});

import {  getAll, add } from "../controllers/typesController.js";
typesRoute.post("/add", add);
typesRoute.get("/getAll",  getAll);