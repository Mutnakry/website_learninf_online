const express = require('express');
const { getUsers, createUser,updateUser,loginUser } = require('../controller/userController.js');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/', getUsers);
router.post('/register', createUser);
router.put('/:user_id', updateUser);
// router.post('/', authenticateToken, createUser);
// router.put('/:user_id', authenticateToken, updateUser); 
router.post('/login', loginUser);

module.exports = router;
