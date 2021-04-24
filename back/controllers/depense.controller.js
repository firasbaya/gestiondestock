const db = require("../models");
const Depense = db.depenses;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Titre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Montant) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const depense= new Depense({
    Titre:req.body.Titre,
    Montant:req.body.Montant,
    published:req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  depense
    .save(depense)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Depense."
      });
    });
};
exports.findAll = (req, res) => {
  const Titre= req.query.Titre;
  var condition = Titre ? { Titre: { $regex: new RegExp(Titre), $options: "i" } } : {};

  Depense.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving depenses."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;


    Depense.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Depense with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Depense with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Depense.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Depense with id=${id}. Maybe Depense was not found!`
        });
      } else res.send({ message: "Depense was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Depense with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Depense.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Depense with id=${id}. Maybe Depense was not found!`
        });
      } else {
        res.send({
          message: "Depense was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Client with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
  Depense.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Depenses were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Depenses."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Depense.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving depenses."
      });
    });
};