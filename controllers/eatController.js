const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Feed.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Feed.find({
      user: req.body.user,
      date: req.body.date
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //   deleteOne: function(req, res) {
  //     db.Feed.deleteOne({
  //       user: req.body.user,
  //       date: req.body.date,
  //       id: req.params.id
  //     })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
