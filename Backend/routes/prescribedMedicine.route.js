const express = require('express');
const router = express.Router();
const prescribedMedicineController = require('../controller/prescribedMedicine.controller');

router.post('/', prescribedMedicineController.addPrescribedMedicine);
router.get('/', prescribedMedicineController.findPrescribedMedicines);
router.get('/:PrescribedMedicineID', prescribedMedicineController.findPrescribedMedicineById);
router.put('/:PrescribedMedicineID', prescribedMedicineController.updatePrescribedMedicine);
router.delete('/:PrescribedMedicineID', prescribedMedicineController.deleteById);

module.exports = router;
