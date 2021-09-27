const mysql=require('mysql')
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "children"

}

)
module.exports=db;

