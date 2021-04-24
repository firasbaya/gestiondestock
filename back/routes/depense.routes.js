module.exports = app => {
    const depenses= require("../controllers/depense.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", depenses.create);
  
    // Retrieve all Tutorials
    router.get("/", depenses.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", depenses.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", depenses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", depenses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", depenses.delete);
  
    // Create a new Tutorial
    router.delete("/", depenses.deleteAll);
  
    app.use('/api/depenses', router);
  };