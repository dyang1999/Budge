// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { reseedDB } = require("./reseedDB");

// App Setup
const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors stuff
app.use(
  cors({
    credentials: true,
  })
);

// uncomment if want to reseed data
// reseedDB();

// Users routes
app.use("/users/", require("./Users/userRoutes"));
// Expenses routes
app.use("/expenses/", require("./Expenses/expenseRoutes"));
// Resources routes
app.use("/resources/", require("./Resources/resourceRoutes"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
