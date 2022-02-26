var sqlite = require("sqlite-sync");
const faker = require("faker");

function reseedDB() {
  sqlite.connect("./db/budge_it.db");
  sqlite.run("DROP TABLE IF EXISTS users;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("users table deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar, monthlyincome INTEGER, savepercent INTEGER, spendpercent INTEGER, investpercent INTEGER, allownotif BOOLEAN, expenseID INTEGER, FOREIGN KEY (expenseID) REFERENCES expenses(id));",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("users table created");
      }
    }
  );

  sqlite.run("DROP TABLE IF EXISTS expenses;", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("expenses table deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE expenses(id INTEGER PRIMARY KEY AUTOINCREMENT, month varchar, year varchar, amount INTEGER);",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("expenses table created");
      }
    }
  );

  sqlite.run("DROP TABLE IF EXISTS resources", function (err) {
    if (err.error) {
      console.log(err.error);
    } else {
      console.log("resources table deleted");
    }
  });

  sqlite.run(
    "CREATE TABLE resources(id INTEGER PRIMARY KEY AUTOINCREMENT, title varchar, url varchar);",
    function (err) {
      if (err.error) {
        console.log(err.error);
      } else {
        console.log("resources table created");
      }
    }
  );
  
  sqlite.close();
}

module.exports = {
  reseedDB,
};
