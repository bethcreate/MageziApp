module.exports = app => {
    const children = require("./controllers/child.controller");
  
 
    app.post("/children", children.create);
    app.get("/children", children.findAll);
    app.get("/children/:childId", children.findOne);
    app.put("/children/:childId", children.update);
    app.delete("/children/:childId", children.delete);
    app.delete("/children", children.deleteAll);
  };