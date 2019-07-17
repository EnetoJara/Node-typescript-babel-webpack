// tslint:disable-next-line:no-var-requires
// tslint:disable:no-var-requires
// tslint:disable:no-implicit-dependencies
// tslint:disable:no-submodule-imports
require("@babel/register");
require("core-js");


require("@babel/runtime/regenerator");

import App from "./index";

const app = App();

app.listen(8080, () => {
	// tslint:disable-next-line:no-console
	console.log("api running port: ", 8080);
});
