var sqlite = require('sqlite-sync');

const expenseReadHandler = (req, res) => {
  sqlite.connect('./db/budge_it.db');
  sqlite.run("SELECT * FROM expenses", (result) => {
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

const expenseSaveHandler = (req, res) => {
    sqlite.connect('./db/budge_it.db');
    month = req.param.month
    year = req.param.year
    amount = req.param.amount
    sqlite.connect('./db/budge_it.db');
    sqlite.run(`INSERT INTO expenses(id, month, year, amount) VALUES(${month}, ${year}, ${amount})`, (result) => {
    console.log(result);    
    res.status(200).send(result);  
    });
    sqlite.close();
  };

module.exports = {
    expenseReadHandler,
    expenseSaveHandler
  };