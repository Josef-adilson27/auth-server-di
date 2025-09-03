import { th } from "zod/locales";

export class DataConflictError extends Error {
  msg: string;
  constructor(message = "DATA_CONFLICT") {
    super(message);
  }

  static handler(error: any) {
    return {
      name: "DATA_CONFLICT",
      message: "USER_ALREADY_EXISTS",
    };
  }
}

export class DataBaseError extends Error {
  constructor(message = "DATA_BASE_ERROR") {
    super(message);
  }
  static handler(error: any) {
    return {
      name: error.name,
      message: error._message,
    };
  }
}

export class ValidationError extends Error {
  constructor(message: string = "VALIDATION_ERROR") {
    super(message);
  }

  static handler(error: any) {
    return {
      name: error.name,
      message: error._message,
    };
  }
}

export class PasswordError extends Error {
  constructor(message: string = "PASSWORD_VALIDATION_ERROR") {
    super(message);
  }

  static handler(error: any) {
    if (typeof error == "string") {
      return {
        message: error,
      };
    }
    return {
      name: error.name,
      message: error._message,
    };
  }
}
