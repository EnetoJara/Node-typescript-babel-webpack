import "@babel/register";
import "core-js";
import "@babel/runtime/regenerator";

import "reflect-metadata";
import { useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import Express from "./index";

import { UserController } from "./controllers/user-controller";

const app = Express();

useContainer(Container);

const port = Number(process.env.PORT) || 8080;

 useExpressServer(app, {
    routePrefix: "/api",
    controllers: [UserController]
}).listen(port, () => {
    console.info("api is listening on port:  ", port);
});
