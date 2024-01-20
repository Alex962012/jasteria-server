import pkg from 'express';
const { Router } = pkg;
export const authRoute = Router({});

import {  registration, login } from "../controllers/authController.js";
authRoute.post("/login", login);
authRoute.post("/registration",  registration);