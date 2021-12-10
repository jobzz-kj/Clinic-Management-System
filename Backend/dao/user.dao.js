// User.dao

const User = require('../models/user');

var userDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,

    findByUserName : findByUserName
   // updateUser: updateUser
}

function findAll() {
    return User.findAll();
}

function findById(UserID) {
    return User.findByPk(UserID);
}

function findByUserName(UserName){
    return User.findOne({
        where:{ UserName : UserName}
    }
    );
    
}

function deleteById(UserID) {
    return User.destroy({ where: { UserID: UserID } });
}

function create(user) {
    var newUser = new User(user);
    return newUser.save();
}

// function updateUser(user, UserID) {
//     var updateUser = {
//         UserName : user.UserName,
//         Password : user.Password,
//         RoleID :  user.RoleID
//     };
//     return User.update(updateUser, { where: { UserID: UserID } });
// }
module.exports = userDao;