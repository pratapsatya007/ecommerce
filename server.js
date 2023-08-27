//require our packages
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const ejs = require("ejs");

//require router routes
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");

//setupp application
const app = express();

//setupp view engine EJS, body-
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username is provided
  if (!username) {
    return res.status(400).json({ error: "No username was given" });
  }
  if (!password) {
    return res.status(400).json({ error: "No password was given" });
  }
  // If the username is provided and valid, continue with the registration process
  // Send a success response
});

//setup session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
console.log(process.env.SECRET);
//initialize passport
app.use(passport.initialize());
//use passport to deal with session

app.use(passport.session());

//connecting to DB
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("db connect success"))
  .catch((err) => console.log("db connect error", err));
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const cartModel = require("./models/cart");
const DataModel = require("./models/userdata");
const dataRoute = require("./routes/datamodel");
const cartRoute = require("./routes/cartitems");
app.use("/", cartRoute);
app.use("/", dataRoute);
app.get("/", (req, res) => {
  res.render("index"); // note that by default the views folder is considered
});
const removeRoute = require("./routes/removedata");
app.use("/", removeRoute);
const userDataRoute = require("./routes/retrievedata"); // Adjust the path as needed
app.use("/", userDataRoute);
const userDataRoute1 = require("./routes/retrievecartitems"); // Adjust the path as needed
app.use("/", userDataRoute1);
const getUsername = require("./routes/getusername");
app.use("/", getUsername);
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/logo.png", (req, res) => {
  res.sendFile(__dirname + "/logo1.png");
});
app.get("/thankyoupage", (req, res) => {
  res.sendFile(__dirname + "/thankyoupage.png");
});
app.get("/gold/rings", (req, res) => {
  res.render("rings");
});
app.get("/sliver", (req, res) => {
  res.render("sliver");
});
app.get("/platinum", (req, res) => {
  res.render("platinum");
});
app.get("/buynow", (req, res) => {
  res.render("buynow");
});
app.get("/gold/earrings", (req, res) => {
  res.render("earrings");
});
app.get("/gold/bangles", (req, res) => {
  res.render("bangles");
});
app.get("/gold/necklace", (req, res) => {
  res.render("necklace");
});
app.get("/gold/bracelets", (req, res) => {
  res.render("bracelets");
});

//use auth routes
app.use("/", authRoute);
app.use("/", homeRoute);

app.listen(process.env.PORT, () => {
  console.log("server on port", process.env.PORT);
});
