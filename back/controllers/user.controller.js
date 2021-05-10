
const User = require("../models/user.model");

exports.allAccess = async (req, res) => {
  console.log(await User.find());
  res.status(200).send(await User.find);
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};