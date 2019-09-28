const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Change.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    // console.log("REQ" + req.body)
    db.Change.find({
      user: req.body.user,
      date: req.body.date
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //   ,
  //   deleteOne: function(req, res) {
  //     db.Change.deleteOne({
  //       user: req.body.user,
  //       date: req.body.date,
  //       id: req.params.id
  //     })
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   }
};
