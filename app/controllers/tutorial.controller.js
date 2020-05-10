const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "content can't be empty" });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "error while creating tutorial" });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "error while retrieving tutorials" });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error retrieving tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Tutorial.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "tutorial updated successfully" });
      } else {
        res.send({
          message: `can't update tutorial with id=${id}. Maybe tutorial not found or req.body empty`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error updating tutorial with id=" + id });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "tutorial deleted successfully" });
      } else {
        res.send({
          message: `can't delete tutorial with id=${id}. Maybe tutorial not found`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "could not delete tutorial with id=" + id });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res.send({ message: `${nums} tutorials deleted successfully` });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || "error while removing tutorials" });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
