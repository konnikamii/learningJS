//const encrypt = require("./encrypt");
const fs = require("fs");
const bcrypt = require("bcrypt");

//const publicKey = fs.readFileSync(__dirname + "/id_rsa_pub.pem", "utf8");

async function hashPassword(password) {
  const saltRounds = 10; // Cost factor controls how much time is needed to calculate a single bcrypt hash.
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log("Password Hash:", hash);
    return hash;
  } catch (error) {
    console.error("Hashing error:", error);
  }
}
const password = (async () => {
  return await hashPassword("123123");
})();

// async function createUser() {
//   const hashedPassword = await hashPassword("123");
//   const user = {
//     name: "Nick",
//     password: hashedPassword,
//   };
//   return user;
// }

async function checkpass(hashedpass, givenpass) {
  const match = await bcrypt.compare(givenpass, hashedpass);
  if (match) {
    console.log("Correct password");
    return true;
  } else {
    console.log("Wrong password");
    return false;
  }
}
console.log(password);
//checkpass(password, "123123");

// Example usage
// (async () => {
//   const user = await createUser();
//   await checkpass(user.password, "123"); // Correct password
//   await checkpass(user.password, "456"); // Wrong password
// })();

//console.log(user);
