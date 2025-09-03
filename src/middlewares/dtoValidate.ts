import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export const dtoValidate = (dtoClass: any) => {

  return async (req: Request, res: Response, next: NextFunction) => {
    const dto: Object = plainToInstance(dtoClass, req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      const errorMessages = errors.map((error) => ({
        field: error.property,
        message: Object.values(error.constraints || {})[0],
      }));
      
      return res.status(400).json({
        message: "Ошибка валидации",
        errors: errorMessages,
      });
    }
    req.body = dto;
    next();
  };

};