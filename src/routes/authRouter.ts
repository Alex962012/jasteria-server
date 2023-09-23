import { Router, Request, Response } from "express";
import { check } from "express-validator";
export const authRoute = Router({});

import { register, login, getUsers } from "../controllers/authController";
authRoute.post("/login", login);
authRoute.post("/register", register);
authRoute.post("/getUsers", getUsers);
