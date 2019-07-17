import { Request, Response } from "express";
import {Body, Get, HttpCode, JsonController, Req, Res} from "routing-controllers";
import { IUser } from "../interfaces/IUser";

@JsonController("/users")
export class UserController {
    
    @Get()
    @HttpCode(200)
    public register (@Body() user: IUser,  @Req() req: Request, @Res() res: Response): Response {
       return res.json({message: "hola"});
    }
}
