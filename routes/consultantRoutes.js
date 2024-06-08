const express = require('express');
const router = express.Router();
const consultantControllers = require('../controllers/consultantControllers');
const { isAuthenticated } = require('../controllers/authControllers');

// Consultant profile routes
router.route('/create-consultant')
    .get(isAuthenticated, consultantControllers.renderCreateProfile)
    .post(isAuthenticated, consultantControllers.createConsultantProfile);

router.route('/consultant')
    .get(isAuthenticated, consultantControllers.renderProfile)
    .post(isAuthenticated, consultantControllers.updateConsultantProfile);

router.route('/delete')
    .post(isAuthenticated, consultantControllers.deleteConsultantProfile);

router.route('/list')
    .get(consultantControllers.getConsultants);

module.exports = router;