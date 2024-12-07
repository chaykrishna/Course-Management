const express = require('express');
const { registerUser, loginUser, getAllUsers, deleteAllUsers } = require('../Controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// Route to get all users
router.get('/users', getAllUsers);

// Route to delete all users
router.delete('/users', deleteAllUsers);

module.exports = router;
