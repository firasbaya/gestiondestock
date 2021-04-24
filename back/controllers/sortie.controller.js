const db = require("../models");
const Sortie = db.sorties;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Id_Article) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Quantité) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Cin_Client) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Montant) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  if (!req.body.Crédit) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  // Create a Tutorial
  const sortie = new Sortie({
    Id_Article:req.body.Id_Article,
    Quantité: req.body.Quantité,
    Cin_Client:req.body.Cin_Client,
    Montant: req.body.Montant,
    Crédit: req.body.Crédit,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  sortie
    .save(sortie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Sortie."
      });
    }); 
};
exports.findAll = (req, res) => {
  const Quantité = req.query.Quantité;
  var condition = Quantité ? { Quantité: { $regex: new RegExp(Quantité), $options: "i" } } : {};

Sortie.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sorties."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Sortie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Sortie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Sortie with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Sortie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Sortie with id=${id}. Maybe Sortie was not found!`
        });
      } else res.send({ message: "Sortie was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sortie with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Sortie.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Sortie with id=${id}. Maybe Sortie was not found!`
        });
      } else {
        res.send({
          message: "Sortie was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Sortie with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
    Sortie.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Sortie were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sorties."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Sortie.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sorties."
      });
    });
};