const OrderTest = require('../models/orderTest');

var OrderTestDao = {

    findAll: findAll,

    create: create,

    findById: findById,

    deleteById: deleteById,

   // updateLabReport: updateLabReport

}



function findAll() {

    return OrderTest.findAll();

}



function findById(OrderTestID) {

    return OrderTest.findByPk(LabReportID);

}



function deleteById(OrderTestID) {

    return OrderTest.destroy({ where: { LabReportID: LabReportID } });

}



function create(orderTest) {

    var newOrderTest = new OrderTest(orderTest);

    return newOrderTest.save();

}




module.exports = OrderTestDao;