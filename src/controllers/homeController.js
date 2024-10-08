const { createNewUser } = require('../services/userService');

const handlehelloWorld = (req, res) => {
  return res.render('home.ejs');
};

const handleUserPage = (req, res) => {
  //model => get data form database

  return res.render('user.ejs');
};

const handleCreateUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  createNewUser(email, password, username);

  return res.send('Sucessfully created');
};

module.exports = { handleUserPage, handlehelloWorld, handleCreateUser };
