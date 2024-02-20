// index.js
const express = require("express");
const app = express();
const port = 3001; // usually 3000 is used for React so we're using 3001 here

app.get("/", (req, res) => {
  res.send("Hello from Node.js backend!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.get("/api", (req, res) => {
  res.send("Data fetched from Node.js backend");
});
