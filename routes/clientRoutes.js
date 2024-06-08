const express = require('express');
const router = express.Router();
const clientControllers = require('../controllers/clientControllers');
const { isAuthenticated } = require('../controllers/authControllers');
// Client profile routes
router.route('/create-client')
    .get(isAuthenticated, clientControllers.renderCreateProfile)
    .post(isAuthenticated, clientControllers.createClientProfile);

router.route('/client')
    .get(isAuthenticated, clientControllers.renderProfile)
    .post(isAuthenticated, clientControllers.updateClientProfile);

router.route('/delete')
    .post(isAuthenticated, clientControllers.deleteClientProfile);

router.route('/list')
    .get(clientControllers.getClients);

module.exports = router;
