const db = require("../models");

// Defining methods for the controller

module.exports = {

//   SAMPLE CODE (based on books):

//   findAll: function(req, res) {
//     db.Book
//       .find(req.query)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
// all creates:
  create: function(req, res) {
    db.Login
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
//   create: function(req, res) {
//     db.User
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
//   },
// // --------------------------------------------------
//   create: function(req, res) {
//     db.Feed
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
// create: function(req, res) {
//   db.Zzz
//     .create(req.body)
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },
//-------------------------------------------------

//-------------------------------------------------
// all updates
//-------------------------------------------------
//   update: function(req, res) {
//     db.Login
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   update: function(req, res) {
//     db.Feed
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   update: function(req, res) {
//     db.Zzz
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
// all removes
//-------------------------------------------------
//   remove: function(req, res) {
//     db.Login
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   remove: function(req, res) {
//     db.Feed
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//-------------------------------------------------
//   remove: function(req, res) {
//     db.Zzz
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
};
