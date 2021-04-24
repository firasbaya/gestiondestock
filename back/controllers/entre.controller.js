const db = require("../models");
const Entre = db.entres;
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

  // Create a Tutorial
  const entre = new Entre({
    Id_Article:req.body.Id_Article,
    Quantité: req.body.Quantité,
    published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  entre
    .save(entre)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Entre."
      });
    });
};
// a voir
exports.findAll = (req, res) => {
  const Quantité = req.query.Quantité;
  var condition = Quantité ? { Quantité: { $regex: new RegExp(Quantité), $options: "i" } } : {};

 

  Entre.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entres."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Entre.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Entre with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Entre with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Entre.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Entre with id=${id}. Maybe Entre was not found!`
        });
      } else res.send({ message: "Entre was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Entre with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Entre.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Entre with id=${id}. Maybe Entre was not found!`
        });
      } else {
        res.send({
          message: "Entre was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Entre with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
    Entre.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Entre were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all entres."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Entre.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving entres."
      });
    });
};