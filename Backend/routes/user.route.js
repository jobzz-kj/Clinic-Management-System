const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

// router.post('/', userController.addUser);
// router.get('/', userController.findUsers);
// router.get('/:UserID', userController.findUserById);
// router.put('/:UserID', userController.updateUser);
// router.delete('/:UserID', userController.deleteById);


router.post('/register',userController.addUser);
router.post('/login',userController.loginUser);
router.get('/',userController.getAllUsers);



module.exports = router;
