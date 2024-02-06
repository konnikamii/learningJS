const { SignJWT } = require("jose");
const { generateKeyPairSync } = require("node:crypto");
const { publicKey, privateKey } = generateKeyPairSync("ed25519");
console.log(publicKey.export({ format: "pem", type: "spki" }));
console.log(privateKey.export({ format: "pem", type: "pkcs8" }));

// const jwt = await new SignJWT({ id: 1 })
//   .setProtectedHeader({ alg: "EdDSA" })
//   .setExpirationTime("2h")
//   .sign(privateKey);

const start = async function (a) {
  const jwt = await new SignJWT({ id: 632, name: "Alex" })
    .setProtectedHeader({ alg: a })
    .setExpirationTime("2h")
    .sign(privateKey);
  console.log(jwt);
};
a = "EdDSA";
start(a);
// console.log(jwt);
