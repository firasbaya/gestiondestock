const db = require("../models");
const Article = db.articles;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Designation) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Marque) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 
  if (!req.body.Categorie) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 
  if (!req.body.Id_fournisseur) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 
  if (!req.body.PrixAchat) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } 
  if (!req.body.PrixVente) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  
   if (!req.body.QuantiteAlerte) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } if (!req.body.totalSortie) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
if (!req.body.soldeSortie) {
  res.status(400).send({ message: "Content can not be empty!" });
  return;
}
if (!req.body.soldeEntre) {
  res.status(400).send({ message: "Content can not be empty!" });
  return;
}
if (!req.body.totalEntre) {
  res.status(400).send({ message: "Content can not be empty!" });
  return;
}


  
  
 

  // Create a Article
  const article = new Article({
    Designation:req.body.Designation,
    Marque:req.body.Marque,
    Categorie:req.body.Categorie,
    Id_fournisseur:req.body.Id_fournisseur,
    PrixAchat:req.body.PrixAchat,
    PrixVente:req.body.PrixVente,
    QuantiteAlerte:req.body.QuantiteAlerte,
   QuantiteArticle:req.body.QuantiteArticle,
   totalSortie: req.body.totalSortie,
   totalEntre: req.body.totalEntre,

   soldeSortie: req.body.soldeSortie,
   soldeEntre: req.body.soldeEntre,
    published:req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  article
    .save(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article."
      });
    });
};
exports.findAll = (req, res) => {
  const Designation = req.query.Designation;
  var condition = Designation ? { Designation: { $regex: new RegExp(Designation), $options: "i" } } : {};

  Article.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Article with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Article with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Article.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Article with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Article was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Article with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
        });
      } else {
        res.send({
          message: "Article was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Article with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
  Article.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Articles were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all articles."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Article.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};