const express = require("express");
const app = express();
const cors = require("cors");

const port = 3002;

const productRouter = require("./product"); // Importing product router

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use("/api/products", productRouter); // Registering product router at '/api/products' route

app.listen(port, () => {
  console.log(`Product catalog service listening on port ${port}`); // Starting the server and logging the port
});
