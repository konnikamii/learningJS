import express from "express";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";

// import { config } from "dotenv";
// config();
// console.log(process.env.NODE_ENV);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
let port = 3000;
let pathFile = "";
if (process.env.NODE_ENV !== "development") {
  port = 8000;
  pathFile = "../../dist/src/htmls";
} else {
  port = 7000;
  pathFile = "../..";
}

//const root = `${__dirname}/..`;
const root = path.join(__dirname, pathFile);
console.log("root:", root);
console.log(process.env.NODE_ENV);

app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.url);
  if (req.cookies && req.cookies.yourCookieName) {
    console.log("Your cookie exists");
  } else {
    console.log("Your cookie does not exist");
    res.cookie("yourCookieName", "yourCookieValue", {
      maxAge: 900000,
      httpOnly: true,
    });
  }
  next();
});
app.post("/about", (_req, res) => {
  console.log("Login successful");
  res.status(200).send("Login successful");
});

if (process.env.NODE_ENV !== "development") {
  console.log("production express server");
  //const sirv = (await import("sirv")).default;
  //app.use(sirv(`${root}/dist/client`));
  app.use(express.static(path.join(__dirname, "../../dist")));
} else {
  console.log("development vite server");
  const vite = await import("vite");
  const viteDevMiddleware = (
    await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
  ).middlewares;
  app.use(viteDevMiddleware);
}
app.get("/", (_req, res) => {
  // res.sendFile(resolve(path.join(__dirname, `${pathFile}/index.html`)));
  console.log("root");
  res.sendFile(
    resolve(path.join(__dirname, `../../dist/src/htmls/index.html`))
  );
});
app.get("/about", (_req, res) => {
  console.log("about");
  res.sendFile(
    resolve(path.join(__dirname, "../../dist/src/htmls/about.html"))
  );
});
app.use("*", (_req, res) => {
  console.log("not found");
  res.status(404).send("Not Found");
});
// app.get("/pricing", (_req, res) => {
//   res.sendFile(
//     resolve(path.join(__dirname, "../../dist/src/htmls/pricing.html"))
//   );
// });
// app.get("/app", (_req, res) => {
//   console.log("app");
//   res.sendFile(resolve(path.join(__dirname, "../../dist/src/htmls/app.html")));
// });
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
