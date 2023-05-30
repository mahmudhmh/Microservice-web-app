const express = require("express");
const app = express();
const port = 3001;

const userRouter = require("./user"); // Importing user router

app.use(express.json());
app.use("/api/users", userRouter); // Registering user router at '/api/users' route

app.listen(port, () => {
  console.log(`User service listening on port ${port}`); // Starting the server and logging the port
});
