const db = require("../models");
const Client = db.clients;
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

/*   if (!req.body.Crédit) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } */
  // Create a Tutorial
  const client= new Client({
    Cin:req.body.Cin,
    Nom:req.body.Nom,
    Adresse:req.body.Adresse,
    Telephone:req.body.Telephone,
    Email:req.body.Email,
   // Crédit:req.body.Crédit,
    published:req.body.published ? req.body.published : false
  });

  // Save Tutorial in the database
  client
    .save(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Client."
      });
    });
};
exports.findAll = (req, res) => {
  const Nom = req.query.Nom;
  var condition = Nom ? { Nom: { $regex: new RegExp(Nom), $options: "i" } } : {};

  Client.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;


    Client.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Client with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Client with id=" + id });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Client.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Client with id=${id}. Maybe Client was not found!`
        });
      } else res.send({ message: "Client was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Client with id=" + id
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;

  Client.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
        });
      } else {
        res.send({
          message: "Client was deleted successfully!"
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
  Client.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Clients were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Clients."
      });
    });
};

exports.findAllPublished = (req, res) => {
  Client.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving clients."
      });
    });
};