module.exports = app => {
    const fournisseurs = require("../controllers/fournisseur.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fournisseurs.create);
  
    // Retrieve all Tutorials
    router.get("/",fournisseurs.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published",fournisseurs.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id",fournisseurs.findOne);
  
    // Update a Tutorial with id
    router.put("/:id",fournisseurs.update);
  
    // Delete a Tutorial with id
    router.delete("/:id",fournisseurs.delete);
  
    // Create a new Tutorial
    router.delete("/",fournisseurs.deleteAll);
  
    app.use('/api/fournisseurs', router);
  };