import { RequestHandler } from "express";
import { getStrengths } from "./strength.service.js";
import { strengthSchema } from "./strength.validation.js";
 
export const getStrengthsController: RequestHandler = async (req, res, next) => {
    try {
        const strengths = await getStrengths();
        res.status(200).json({
            data: strengths,
        })
    } catch (error) {
        next(error);
    }
}