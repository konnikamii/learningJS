const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//access .env
require("dotenv").config();

// connect to mongoDB
const dbURI = process.env.dbURI;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//listen for requests

//middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//mongoose routes

//routes
app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host", req.hostname);
  console.log("path", req.path);
  console.log("method", req.method);
  next();
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRoutes);

//404

app.use((req, res) => {
  res.render("404", { title: "404" });
});
