"use strict";
exports.__esModule = true;
// tslint:disable-next-line:no-var-requires
// tslint:disable:no-var-requires
// tslint:disable:no-implicit-dependencies
// tslint:disable:no-submodule-imports
require("@babel/register");
require("core-js");
require("@babel/runtime/regenerator");
var crypto = require("crypto");
var fs = require("fs");
var jwt = require("jsonwebtoken");
var {join} = require("path");
const { log } = console;
//const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
//	namedCurve: 'sect239k1',
//	publicKeyEncoding:  { type: 'spki', format: 'pem' },
//	privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
//  });
 const privateKey = fs.readFileSync(join(__dirname, "private.key"));
 const publicKey = fs.readFileSync(join(__dirname, "public.key"));
// fs.writeFileSync(join(__dirname, "private.key"), privateKey)
// fs.writeFileSync(join(__dirname, "public.key"), publicKey)

function signIn (user) {

	var i  = 'Mysoft';          // Issuer 
	var s  = 'some';        // Subject 
	var a  = 'localhost'; // Audience// SIGNING OPTIONS
	var signOptions = {
	 issuer:  i,
	 subject:  s,
	 audience:  a,
	 expiresIn:  "12h",
	 algorithm:  "RS256"
	};

    const payload = {
        name: user.name,
        id: user.id,
        email: user.email
    };

    return jwt.sign(payload, privateKey, signOptions);
}

 function verify (token) {
	var i  = 'Mysoft';          // Issuer 
	var s  = 'some';        // Subject 
	var a  = 'localhost'; // Audience// SIGNING OPTIONS
	var verifyOptions = {
	 issuer:  i,
	 subject:  s,
	 audience:  a,
	 expiresIn:  "12h",
	 algorithm:  ["RS256"]
	};
	
	try {
	return jwt.verify(token, publicKey, verifyOptions);
	} catch (error) {
		console.log(error);
	}
}


// log(signIn({ name:"Ernesto Jara Olveda", id: 72614, email: "tro@troll.com" }));
log(verify("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJuZXN0byBKYXJhIE9sdmVkYSIsImlkIjo3MjYxNCwiZW1haWwiOiJ0cm9AdHJvbGwuY29tIiwiaWF0IjoxNTYzMjczOTcxLCJleHAiOjE1NjMzMTcxNzEsImF1ZCI6ImxvY2FsaG9zdCIsImlzcyI6Ik15c29mdCIsInN1YiI6InNvbWUifQ.MEACHg-KbIr3-p4CcBig5QbUme1hnrg082AaLjYV_qSt-QIeHaa-7LRmz-0qdPHuZ9gqi734BtzPdckquxw-fGwA"));
