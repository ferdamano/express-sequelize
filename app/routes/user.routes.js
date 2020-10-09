module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Users 
  router.post("/", users.create);

  app.use('/api/users', router);
};