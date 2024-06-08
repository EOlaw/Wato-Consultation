// Import the necessary modules.
const User = require('../models/userModel');
const Consultant = require('../models/consultantModel')
const Client = require('../models/clientModel')
const passport = require('passport');

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        res.status(401).json({ error: 'You must be logged in to access this resource' });
        //req.flash('error', 'You must be signed in first!')
        return res.redirect('/')
    }
    next()
}

module.exports = { isAuthenticated }