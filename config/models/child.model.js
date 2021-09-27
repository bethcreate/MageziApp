const sql = require("../server/config/db");


const Child=function(child){
    this.name=child.name;
};

Child.create = (newChild, result) => {
    sql.query("INSERT INTO children SET ?", newChild, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created child: ", { id: res.insertId, ...newChild });
    result(null, { id: res.insertId, ...newChild });
  });
};

Child.findById = (childId, result) => {
    sql.query(`SELECT * FROM children WHERE id = ${childId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found child: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      
      result({ kind: "not_found" }, null);
    });
  };

  Child.getAll = result => {
    sql.query("SELECT * FROM children", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("children: ", res);
      result(null, res);
    });
  };

  Child.updateById = (id, child, result) => {
    sql.query(
      "UPDATE children SET name = ?, active = ? WHERE id = ?",
      [child.name, child.active, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
         
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated child: ", { id: id, ...child });
        result(null, { id: id, ...child });
      }
    );
  };

  Child.remove = (id, result) => {
    sql.query("DELETE FROM children WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
       
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted child with id: ", id);
      result(null, res);
    });
  };



  Child.removeAll = result => {
    sql.query("DELETE FROM children", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} children`);
      result(null, res);
    });
  };
  

  exports.create = (req, res) => {
   
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    const Child = new Customer({
      name: req.body.name,
      active: req.body.active
    });
    Child.create(child, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };
  module.exports = Child;
  
