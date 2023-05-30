const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./user/user"); // Importing user router
const authRoute = require("./API-gateway/auth"); // Importing authentication router
const productRoute = require("./product/product"); // Importing product router
const cartRoute = require("./cart/cart"); // Importing cart router
const orderRoute = require("./order/order"); // Importing order router
const jwt = require("jsonwebtoken");
const cors = require("cors");

// dotenv.config();
// mongoose
//   .connect(process.env.USER_MONGO_URL)
//   .then(() => console.log("DBConnection Successful!"))
//   .catch((err) => {
//     console.log(err); //DB CONNECT>>.ENV
//   });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute); // Registering authentication router at '/api/auth' route
app.use("/api/users", userRoute); // Registering user router at '/api/users' route
app.use("/api/products", productRoute); // Registering product router at '/api/products' route
app.use("/api/carts", cartRoute); // Registering cart router at '/api/carts' route
app.use("/api/orders", orderRoute); // Registering order router at '/api/orders' route

app.listen(process.env.PORT || 7000, () => {
  console.log("Backend server is running"); // Listening on the specified port or defaulting to 7000
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// MONGO_URL = mongodb+srv://khaliidhelalii:Khaliid4431@cluster0.pevoxht.mongodb.net/shop?retryWrites=true&w=majority
