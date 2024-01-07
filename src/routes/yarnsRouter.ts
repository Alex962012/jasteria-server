import { Router, Request, Response } from "express";
import { check } from "express-validator";
export const yarnsRoute = Router({});

import {  getAll, add } from "../controllers/yarnsController.js";
yarnsRoute.post("/add", add);
yarnsRoute.get("/getAll",  getAll);