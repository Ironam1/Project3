const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Feed.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Feed.find({}, function(err, found) {
      // Log any errors if the server encounters one
      if (err) {
        console.log(err);
      }
      // Otherwise, send the result of this query to the browser
      else {
        res.json(found);
      }
    });
  }
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
