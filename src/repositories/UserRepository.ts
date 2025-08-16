import { inject, injectable } from "inversify";
import { User } from "../models/User.js";
import { Model } from "mongoose";
import { UserModel } from "../models/User.js";
import { error } from "console";

export interface IUserRepository {
  create(user: Partial<User>): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, updates: Partial<User>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}

@injectable()
export class UserRepository implements IUserRepository {
  async create(user: Partial<User>): Promise<User> {
    const newUser = new UserModel(user);
    return await newUser.save();
  }

  findById(id: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  update(id: string, updates: Partial<User>): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
