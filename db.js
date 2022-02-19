var mysql = require('mysql')
var cfg = require('./config/index')
var db = mysql.createConnection({
  host: cfg.DB_HOST,
  port: 3306,
  user: cfg.DB_USER,
  password: cfg.DB_PASS,
  database: cfg.DB_NAME

});
db.connect(function(err){
    if (err){
        console.log('error connection');
        return;
    }
    console.log('connection succuss');
});
module.exports = db;