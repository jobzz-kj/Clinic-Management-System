const express = require('express');
const router = express.Router();
const staffController = require('../controller/staff.controller');

router.post('/', staffController.addStaff);
router.get('/', staffController.findStaffs);
router.get('/:StaffID', staffController.findStaffById);
router.put('/:StaffID', staffController.updateStaff);
router.delete('/:StaffID', staffController.deleteById);
router.get('/byrole/:RoleID', staffController.findStaffByRoleId)

module.exports = router;
