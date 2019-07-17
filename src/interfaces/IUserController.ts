import {NextFunction, Request, Response} from "express";
import {IUser} from "./IUser";

export interface IUserController {
    addUser (user: IUser): Response | NextFunction;
    deleteUser (id: number): Response | NextFunction;
    findById (id: number): Response | NextFunction;
    updateUser (user: IUser): Response | NextFunction;
}
