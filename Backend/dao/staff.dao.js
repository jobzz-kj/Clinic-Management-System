const Staff = require('../models/staff');
var staffDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateStaff: updateStaff,
    findByRoleId: findByRoleId
}

function findAll() {
    return Staff.findAll();
}

function findById(StaffID) {
    return Staff.findByPk(StaffID);
}

function findByRoleId(RoleID){
    return Staff.findAll({where:{RoleID: RoleID}})
}

function deleteById(StaffID) {
    return Staff.destroy({ where: { StaffID: StaffID } });
}

function create(staff) {
    var newStaff = new Staff(staff);
    return newStaff.save();
}

function updateStaff(staff, StaffID) {
    var updateStaff = {
        StaffName: staff.StaffName,
        RoleID : staff.RoleID,
        DateOfBirth : staff.RoleID,
        Address : staff. Address,
        DateOfJoining : staff.DateOfJoining,
        DateOfResignation : staff.DateOfResignation,
        Remarks : staff.Remarks
    };
    return Staff.update(updateStaff, { where: { StaffID: StaffID } });
}
module.exports = staffDao;