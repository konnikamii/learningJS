// // server.js
// import express from "express";
// import { resolve } from "path";
// import process from "process";

// const app = express();

// // Serve static files
// app.get("/", (req, res) => res.sendFile(resolve("public/index.html")));
// app.get("/about", (req, res) => res.sendFile(resolve("public/about.html")));
// app.get("/pricing", (req, res) => res.sendFile(resolve("public/pricing.html")));

// // Serve SPA
// app.use("/user", express.static(resolve("dist")));

// // Fallback to SPA for any other route under /user
// app.get("/user/*", (req, res) => res.sendFile(resolve("dist/index.html")));

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Server is running on port ${port}`));

import express from "express";

// Create an Express application
const app = express();

// Define a route to handle GET requests to the root URL
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
