"use strict";

const {realpathSync, existsSync} = require('fs');
const {resolve, isAbsolute, delimiter} = require('path');

const NODE_ENV = process.env.NODE_ENV || "development";

const appDirectory = realpathSync(process.cwd());

if (typeof NODE_ENV !== "string") {
	throw new Error("falle and stuff");
}

const dotFiles = ['.env'].filter(Boolean);

if (existsSync(dotFiles)) {
	require("dotenv-expand")(require("dotenv").config((dotFiles)));
}

process.env.NODE_PATH = (process.env.NODE_PATH || "")
	.split(delimiter)
	.filter(folder => folder && isAbsolute(folder))
	.map(folder => resolve(appDirectory, folder))
	.join(delimiter);

const ENETO_APP = /^ENETO_APP_/i;



module.exports = (function () {
	const raw = Object.keys ( process.env )
		.filter ( key => ENETO_APP.test ( key ) )
		.reduce ( ( env, key ) => {
				env[ key ] = process.env[ key ];
				return env;
			},
			{
				BABEL_ENV: process.env.ENETO_APP_BABEL_ENV,
				ENETO_APP_DB_NAME: process.env.ENETO_APP_DB_NAME,
				ENETO_APP_DB_PASSWORD: process.env.ENETO_APP_DB_PASSWORD,
				ENETO_APP_DB_USER: process.env.ENETO_APP_DB_USER,
				GENERATE_SOURCEMAP: process.env.ENETO_APP_GENERATE_SOURCEMAP,
				NODE_ENV: process.env.ENETO_APP_NODE_ENV,
				PORT: process.env.ENETO_APP_PORT,
				PUBLIC_URL: "/"
			} );
	
	const stringyField = {
		"process.env": Object.keys(raw).reduce((env, key)=> {
			env[key]=JSON.stringify(raw[key]);
			return env;
		},{}),
		
	};
	
	return {
		raw, stringyField
	}
})();
