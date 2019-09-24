const db = require("../models");
// Defining methods for the controller
module.exports = {
//-------------------------------------------------
    findAll: function(req, res) {
    db.Feed.find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
//-------------------------------------------------
    findById: function(req, res) {
    db.Feed.findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
//-------------------------------------------------
    create: function(req, res) {
    db.Feed
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//-------------------------------------------------
  update: function(req, res) {
    db.Feed
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//-------------------------------------------------
  remove: function(req, res) {
    db.Feed
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};