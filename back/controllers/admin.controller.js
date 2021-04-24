const db = require("../models");
const Admin = db.admins;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Nom) {
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
  }

  // Create a Tutorial
  const admin = new Admin({
  
    Nom: req.body.Nom,
    Email: req.body.Email,
    Password: req.body.Password,
published: req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  admin
    .save(admin)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating Admin."
      });
    });
};
exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = Nom ? { Nom: { $regex: new RegExp(Nom), $options: "i" } } : {};

  Admin.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admins."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;

  Admin.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Admin with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Admin with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Admin.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Admin with id=${id}. Maybe Admin was not found!`
        });
      } else res.send({ message: "Admin was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Admin with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Admin.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Admin with id=${id}. Maybe Admin was not found!`
        });
      } else {
        res.send({
          message: "Admin was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Admin with id=" + id
      });
    });
};
exports.deleteAll = (req, res) => {
  Admin.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} =Admins were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all admins."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Admin.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving admins."
      });
    });
};