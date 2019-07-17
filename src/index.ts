

import BodyParser from "body-parser";
import Compress from "compression";
import Cors from "cors";
import Express, {Application, Request, Response} from "express";

import Helpmet from "helmet";
import { OK } from "http-status-codes";
/**
 * @desc creates the Express Server
 * @returns {Application} Express instance
 */
export default function (): Application {
    /**
     * @
     * type{Application}
     */
    const app = Express();

    app.use(Helpmet());
    app.use(BodyParser.json());
    app.use(BodyParser.urlencoded({extended: true}));
    app.use(Cors());
    app.use(Compress());
    app.get("/api", function (req, res) {
        return res.status(OK).json({ message: "you is heaw" });
    });

    return app;
}
