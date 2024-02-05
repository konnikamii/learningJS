const crypto = require("crypto");
const fs = require("fs");

function createKeypairECDSA() {
  const keyPair = crypto.generateKeyPairSync("ed25519", {
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      // cipher: "aes-256-cbc",
      // passphrase: "top secret",
    },
  });

  //Create the public key file
  fs.writeFileSync(__dirname + "/id_ecdsa_pub.pem", keyPair.publicKey);

  //Create the private key file
  fs.writeFileSync(__dirname + "/id_ecdsa_priv.pem", keyPair.privateKey);
}

function createKeypairECDH() {
  const keyPair = crypto.generateKeyPairSync("x25519", {
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      // cipher: "aes-256-cbc",
      // passphrase: "top secret",
    },
  });

  //Create the public key file
  fs.writeFileSync(__dirname + "/id_ecdh_pub.pem", keyPair.publicKey);

  //Create the private key file
  fs.writeFileSync(__dirname + "/id_ecdh_priv.pem", keyPair.privateKey);
}

createKeypairECDSA();
//createKeypairECDH();
