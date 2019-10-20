const db = require("../models");

module.exports = {
  create: function(req, res) {
    db.Sleep.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Sleep.find(
      {
        user: req.query.user,
        date: req.query.date
      },
      function(err, found) {
        if (err) {
          console.log(err);
        } else {
          res.json(found);
        }
      }
    );
  }
};
//   deleteOne: function(req, res) {
//     db.Sleep.deleteOne({
//       user: req.body.user,
//       date: req.body.date,
//       id: req.params.id
//     })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
