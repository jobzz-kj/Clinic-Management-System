const OrderTestDao = require('../dao/orderTest.dao');
var orderTestController = {
    addOrderTest: addOrderTest,
    findOrderTest: findOrderTest,
    findOrderTestById: findOrderTestById,
   // updateOrderTest: updateOrderTest,
    deleteById: deleteById
}

function addOrderTest(req, res) {
    let orderTest = req.body;
    OrderTestDao.create(orderTest).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findOrderTestById(req, res) {
    OrderTestDao.findById(req.params.OrderTestID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    OrderTestDao.deleteById(req.params.OrderTestID).
        then((data) => {
            res.status(200).json({
                message: "Order deleted successfully",
                orderTest: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

// function updateOrderTest(req, res) {
//     OrderTestDao.updateOrderTest(req.body, req.params.LabReportID).
//         then((data) => {
//             res.status(200).json({
//                 message: "LabReport updated successfully",
//                 labReport: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

function findOrderTest(req, res) {
    OrderTestDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = orderTestController;