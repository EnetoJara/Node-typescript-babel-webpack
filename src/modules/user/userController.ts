import { Request, Response } from "express";
import {Body, HttpCode, JsonController, Post, Req, Res} from "routing-controllers";
import {IUser} from "../../interfaces/IUser";
import {Userervice} from "./service";


@JsonController("/users")
export class UserController {
    public constructor (private readonly userService: Userervice) {}

    @Post()
    @HttpCode(201)
    public register (@Body() user: IUser,  @Req() req: Request, @Res() res: Response): Response {
        return this.userService.register(user, (err, result) => {
            if (err) {
                return res.status(err.code).json(err.json);
            }

            return res.json(result);
        });
    }
}
