
const db = require("../models");
const Magasinier = db.magasiniers;
exports.create = (req, res) => {
  // Validate request
/*   if (!req.body.Cin) {
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
  if (!req.body.Téléphone) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Email) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  if (!req.body.Password) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */

  // Create a Tutorial
  const magasinier = new Magasinier({
    Cin: req.body.Cin,
    Nom: req.body.Nom,
    Adresse: req.body.Adresse,
    Téléphone: req.body.Téléphone,
    Email: req.body.Email,
    Password: req.body.Password,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  magasinier
    .save(magasinier)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Magasinier."
      });
    });
};
exports.findAll = (req, res) => {
    const Cin= req.query.Cin;
    var condition = Cin ? { Cin: { $regex: new RegExp(Cin), $options: "i" } } : {};

  Magasinier.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving magasiniers."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Magasinier.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Magasinier with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Magasinier with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Magasinier.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Magasinier with id=${id}. Maybe Magasinier was not found!`
        });
      } else res.send({ message: "Magasinier was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Magasinier with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Magasinier.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Magasinier with id=${id}. Maybe Magasinier was not found!`
        });
      } else {
        res.send({
          message: "Magasinier was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Magasinier with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
  Magasinier.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} magasiniers were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all magasiniers."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Magasinier.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving magasiniers."
      });
    });
}; 