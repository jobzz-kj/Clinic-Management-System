const Bill = require('../models/bills');
var billDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateBill: updateBill
}

function findAll() {
    return Bill.findAll();
}

function findById(BillID) {
    return Bill.findByPk(BillID);
}

function deleteById(BillID) {
    return Bill.destroy({ where: { BillID: BillID } });
}

function create(bill) {
    var newBill = new Bill(bill);
    return newBill.save();
}

function updateBill(bill, BillID) {
    var updateBill = {
        PatientID: bill.PatientID,
        AppointmentID : bill.AppointmentID,
        BillAmount : bill.BillAmount
    };
    return Bill.update(updateBill, { where: { BillID: BillID } });
}
module.exports = billDao;