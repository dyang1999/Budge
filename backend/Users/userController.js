var sqlite = require('sqlite-sync');

const userHandler = (req, res) => {
  sqlite.connect('./db/budge_it.db');
  sqlite.run("SELECT * FROM users", (result) => {
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

module.exports = {
  userHandler
  };