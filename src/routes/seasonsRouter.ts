import { Router, Request, Response } from "express";
import { check } from "express-validator";
export const seasonRoute = Router({});

import {  getAll, add } from "../controllers/seasonsController.js";
seasonRoute.post("/add", add);
seasonRoute.get("/getAll",  getAll);