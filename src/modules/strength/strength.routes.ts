import { Router } from "express";
import { getStrengthsController } from "./strength.controller.js";

export const strengthRouter = Router();

strengthRouter.get('/', getStrengthsController);