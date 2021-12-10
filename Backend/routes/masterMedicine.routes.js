const express = require('express');
const router = express.Router();
const masterMedicineController = require('../controller/masterMedicine.controller');

router.post('/', masterMedicineController.addMasterMedicine);
router.get('/', masterMedicineController.findMasterMedicines);
router.get('/:MasterMedicineID', masterMedicineController.findMasterMedicineById);
router.put('/:MasterMedicineID', masterMedicineController.updateMasterMedicine);
router.delete('/:MasterMedicineID', masterMedicineController.deleteById);

module.exports = router;
