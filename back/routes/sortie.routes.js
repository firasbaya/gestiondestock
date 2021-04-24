module.exports = app => {
  const sortie = require("../controllers/sortie.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",sortie.create);

  // Retrieve all Tutorials
  router.get("/",sortie.findAll);

  // Retrieve all published Tutorials
  router.get("/published",sortie.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id",sortie.findOne);

  // Update a Tutorial with id
  router.put("/:id",sortie.update);

  // Delete a Tutorial with id
  router.delete("/:id",sortie.delete);

  // Create a new Tutorial
  router.delete("/",sortie.deleteAll);

  app.use('/api/sorties', router);
};