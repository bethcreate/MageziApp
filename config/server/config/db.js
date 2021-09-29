const mysql = require('mysql')
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "children"

});

db.connect(function (error) {
  if (error) throw error;
  console.log('Connected');

var data = "INSERT INTO tasks (Day,Name, task) VALUES ('Monday','Mugo', 'Clean the house')"
var data= "INSERT INTO tasks(Day,Name,task) VALUES('thursday','Joy','take care of the baby')"
;
db.query(data, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});

});

module.exports = db;

