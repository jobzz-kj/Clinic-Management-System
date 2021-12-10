// User Controller

const userDao = require('../dao/user.dao');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config ()

var userController = {
    addUser: addUser,
    //findUsers: findUsers,
    //findUserById: findUserById,
    //updateUser: updateUser,
    //deleteById: deleteById

    loginUser : loginUser,
    getAllUsers : getAllUsers
}

function addUser(req, res) {
    let user = {}
    user.UserName = req.body.UserName;
    user.Password = bcrypt.hashSync(req.body.Password);
    user.RoleID  = req.body.RoleID;
    
    userDao.create(user)
        .then((data) => {
            userDao.findByUserName(user.UserName).then(() => {
                // res.send(data);
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.UserID }, process.env.TOKEN_SECRET, {
                    expiresIn: expiresIn
                });

                //users.token = accessToken
    

                res.status(200).send({
                    "user": user, "accessToken": accessToken, "expires_in": expiresIn
                });

            }).catch((error) => {
                console.log(error);
                return res.status(500).send('Server error!');
            })


        })
        .catch((error) => {
            console.log(error);
        });
}


userInfo = {}

function loginUser(req, res) {
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    
    userDao.findByUserName(UserName)
        .then((data) => {
            console.log(data)
            enteredPassword = data.Password;
            console.log(enteredPassword);
            const result = bcrypt.compareSync(Password, enteredPassword);
            if (!result) return res.status(401).send('Password not valid!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: data.UserID, role: data.RoleID }, process.env.TOKEN_SECRET, {
                expiresIn: expiresIn
            });
            userInfo = data;
            res.status(200).send({
                "user": data,
                "accessToken": accessToken,
                "expires_in": expiresIn
            });
        })
        .catch((error) => {
            console.log(error);
            return res.status(404).send('User not found!');
        });
}

function getAllUsers(req, res){

    userDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}


// function findUserById(req, res) {
//     userDao.findById(req.params.UserID).
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function deleteById(req, res) {
//     userDao.deleteById(req.params.UserID).
//         then((data) => {
//             res.status(200).json({
//                 message: "User deleted successfully",
//                 user: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function updateUser(req, res) {
//     userDao.updateUser(req.body, req.params.UserID).
//         then((data) => {
//             res.status(200).json({
//                 message: "User updated successfully",
//                 user: data
//             })
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// function findUsers(req, res) {
//     userDao.findAll().
//         then((data) => {
//             res.send(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

module.exports = userController;