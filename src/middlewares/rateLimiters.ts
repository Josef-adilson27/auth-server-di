import { NextFunction, Request, Response } from "express";
import createRateLimit from "express-rate-limit";

export const limiters = {
  auth: createRateLimit({
    windowMs: 60 * 60 * 1000, // 1 час
    max: 10,
    message: "Слишком много попыток входа",
  }),

  registration: createRateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 24 час
    max: 10,
    message: "Превышено количество попыток регистрации",
  }),
};
