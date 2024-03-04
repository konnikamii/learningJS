// import express from "express";
// import path, { resolve, dirname } from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();
// console.log(path.join(__dirname, "../dist"));
// app.use(express.static(path.join(__dirname, "../dist")));

// app.get("/", (req, res) => {
//   res.sendFile(resolve(path.join(__dirname, "../dist")));
// });

// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

import express from "express";
import path, { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "../../dist")));

app.get("/", (_req, res) => {
  res.sendFile(
    resolve(path.join(__dirname, "../../dist/src/htmls/index.html"))
  );
});
app.get("/about", (_req, res) => {
  res.sendFile(
    resolve(path.join(__dirname, "../../dist/src/htmls/about.html"))
  );
});
app.get("/pricing", (_req, res) => {
  res.sendFile(
    resolve(path.join(__dirname, "../../dist/src/htmls/pricing.html"))
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
