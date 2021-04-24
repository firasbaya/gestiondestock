const db = require("../models");
const Fournisseur = db.fournisseurs;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Cin) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Adresse) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Telephone) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  // Create a Tutorial
  const fournisseur= new Fournisseur({
    Cin:req.body.Cin,
    Nom:req.body.Nom,
    Adresse:req.body.Adresse,
    Telephone:req.body.Telephone,
    Email:req.body.Email,
    published:req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  fournisseur
    .save(fournisseur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fournisseur."
      });
    });
};
exports.findAll = (req, res) => {
  const Nom= req.query.Nom;
  var condition = Nom ? { Nom: { $regex: new RegExp(Nom), $options: "i" } } : {};

  Fournisseur.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving fournisseurss."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;


    Fournisseur.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Fournisseur with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Fournisseur with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Fournisseur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Fournissuer with id=${id}. Maybe Fournisseur was not found!`
        });
      } else res.send({ message: "Fournissuer was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fournissuer with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Fournisseur.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Fournisseur with id=${id}. Maybe Fournisseur was not found!`
        });
      } else {
        res.send({
          message: "Fournisseur was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fournissuer with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
  Fournisseur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Fournissuer were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Fournisseurs."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Fournisseur.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving fournisseurs."
      });
    });
};