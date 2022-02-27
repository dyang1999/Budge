var sqlite = require('sqlite-sync');

const resourceReadHandler = (req, res) => {
  sqlite.connect('./db/budge_it.db');
  sqlite.run("SELECT * FROM resources", (result) => {
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

const resourceSaveHandler = (req, res) => {
  sqlite.connect('./db/budge_it.db');
  title = req.param.title
  url = req.param.url
  sqlite.connect('./db/budge_it.db');
  sqlite.run(`INSERT INTO expenses(id, title, url) VALUES(${title}, ${url})`, (result) => {
    console.log(result);    
    res.status(200).send(result);  
  });
  sqlite.close();
};

module.exports = {
  resourceReadHandler,
  resourceSaveHandler
  };