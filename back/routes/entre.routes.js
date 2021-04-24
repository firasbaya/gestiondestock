module.exports = app => {
  const entres = require("../controllers/entre.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/",entres.create);

  // Retrieve all Tutorials
  router.get("/",entres.findAll);

  // Retrieve all published Tutorials
  router.get("/published",entres.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id",entres.findOne);

  // Update a Tutorial with id
  router.put("/:id",entres.update);

  // Delete a Tutorial with id
  router.delete("/:id",entres.delete);

  // Create a new Tutorial
  router.delete("/",entres.deleteAll);

  app.use('/api/entres', router);
};