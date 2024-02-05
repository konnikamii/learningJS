const crypto = require("crypto");
const fs = require("fs");

const publicKey = fs.readFileSync(__dirname + "/id_ecdh_pub.pem", "utf8");
const privateKey = fs.readFileSync(__dirname + "/id_ecdsa_priv.pem", "utf8");

function encryptWithPublicKey(publicKey, message) {
  const bufferMessage = Buffer.from(message, "utf8");
  return crypto.publicEncrypt(publicKey, bufferMessage);
}

console.log(crypto.privateEncrypt(privateKey, Buffer.from("hello")));

module.exports.encryptWithPublicKey = encryptWithPublicKey;
