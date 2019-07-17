import * as crypto from "crypto";
import * as fs from "fs";
import * as jwt from "jsonwebtoken";
import { join } from "path";

const privateKey = fs.readFileSync(join(__dirname, "private.key"));
const publicKey = fs.readFileSync(join(__dirname, "public.key"));

export function signIn (user: any): string {
    const i = "Mysoft";
    const s = "some";
    const a = "localhost";
    const signOptions = {
        issuer: i,
        subject: s,

        audience: a,
        expiresIn: "12h",
        algorithm: "RS256"
    };

    const payload = {
        name: user.name,
        id: user.id,
        email: user.email
    };

    return jwt.sign(payload, privateKey, signOptions);
}

export function verify (token: string): any {
    const i = "Mysoft";
    const s = "some";
    const a = "localhost";
    const verifyOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: "12h",
        algorithm: ["RS256"]
    };

    return jwt.verify(token, publicKey, verifyOptions);

}

export function encrypt (password: string): string {
    const cipher = crypto.createCipher("aes-256-ctr", privateKey);
    let crypted = cipher.update(password, "utf8", "hex");
    crypted += cipher.final("hex");
    return crypted;
}

export function decrypt (text: string): string {
    const decipher = crypto.createDecipher("aes-256-ctr", privateKey);
    let dec = decipher.update(text, "hex", "utf8");
    dec += decipher.final("utf8");
    return dec;
}
