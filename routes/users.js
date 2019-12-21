const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConfig = require('../passport');

const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/')
  .get(UsersController.root);

router.route('/signup')
  .post(validateBody(schemas.signUpSchema), UsersController.signUp);

router.route('/signin')
  .post(validateBody(schemas.signInSchema), passport.authenticate('local',{session: false}), UsersController.signIn);

router.route('/getallname')
  .get(passport.authenticate('jwt',{session: false}),UsersController.getAllName);

module.exports = router;