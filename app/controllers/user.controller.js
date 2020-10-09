const db = require("../models");
const User = db.users;
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Create and Save a new Product
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "email and/or password can not be empty!",
    });
    return;
  }

  // Create a User
  let user = {
    email: req.body.email,
  };
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    user['password'] = hash
  });

  // Save User in the database
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User.",
      });
    });
};
