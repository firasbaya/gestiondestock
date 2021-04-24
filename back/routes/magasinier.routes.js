module.exports = app => {
    const magasiniers = require("../controllers/magasinier.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", magasiniers.create);
  
    // Retrieve all Tutorials
    router.get("/", magasiniers.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", magasiniers.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", magasiniers.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", magasiniers.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", magasiniers.delete);
  
    // Create a new Tutorial
    router.delete("/", magasiniers.deleteAll);
  
    app.use('/api/magasiniers', router);
  };