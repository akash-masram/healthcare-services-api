const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Add a new service
router.post('/', serviceController.addService);

// Get all services
router.get('/', serviceController.getAllServices);

// Update a service
router.put('/:id', serviceController.updateService);

// Delete a service
router.delete('/:id', serviceController.deleteService);

module.exports = router;
