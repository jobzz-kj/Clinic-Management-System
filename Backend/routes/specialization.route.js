const express = require('express');
const router = express.Router();
const specializationsController = require('../controller/specialization.controller');

router.post('/', specializationsController.addSpecialization);
router.get('/', specializationsController.findSpecializations);
router.get('/:SpecializationID', specializationsController.findSpecializationById);
router.put('/:SpecializationID', specializationsController.updateSpecialization);
router.delete('/:SpecializationID', specializationsController.deleteById);

module.exports = router;
