import {IUser} from "../../interfaces/IUser";
import {User} from "./user.class";

import * as config from '../../config/jwt';

export class Userervice {

    public register (user: IUser, callback: (err, res)=>{}): any {
        try {
            const newUser = new User(user);
            config.signIn(newUser);
            callback(null, true);
        } catch (error) {
            callback(error, null);
        }
    }
}
