const express = require('express');
const router = express.Router();
const passport = require('passport');
const userControllers = require('../controllers/userControllers');

// User routes
router.route('/register')
    .get(userControllers.renderRegister)
    .post(userControllers.registerUser);

router.route('/login')
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/user/login' }), userControllers.loginUser)
    .get(userControllers.renderLogin)

router.route('/logout')
    .get(userControllers.logoutUser);

router.route('/dashboard')
    .get(userControllers.getDashboard);

router.route('/list')
    .get(userControllers.getUsers);

router.route('/delete/:id')
    .post(userControllers.deleteUser);

module.exports = router;
