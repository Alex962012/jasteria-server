import { Router, Request, Response } from "express";
import { check } from "express-validator";
export const authRoute = Router({});

import {  registration, login } from "../controllers/authController.js";
authRoute.post("/login", login);
authRoute.post("/registration",  registration);