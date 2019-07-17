"use strict";

const semVer = require("semver");
const {engines} = require("./package");

const version = engines.node;

console.warn("My node: ", process.version);
console.warn("The One I need: ", version);

if ( !semVer.satisfies(process.version, version) ) {
	throw new Error(`yow bro! The current node version${process.version} does not satisfy the required version ${version}`);
}
