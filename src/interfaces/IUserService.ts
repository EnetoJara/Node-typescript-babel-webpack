import { NextFunction, Request, Response } from "express";
import { IUser } from "./IUser";

export interface IUserService {
    addUser (user: IUser): Promise<IUser>;
    deleteUser (id: number): Promise<boolean>;
    findOneUser (user: IUser): Promise<IUser>;
    findById (id: number):Promise<IUser>;
    updateUser (user: IUser): Promise<IUser>;
}
