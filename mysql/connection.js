const mysql = require("mysql");

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root', /******** REPLACE MYSQL USER *******/
  password: 'pass', /******** REPLACE WITH MYSQL USER PASSWORD *******/
  database: 'mysql'
})

module.exports = con;
