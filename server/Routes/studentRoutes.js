const express = require('express');
const router = express.Router();
const { getAttendance, getHandouts, getMaterials, getAssignments } = require('../Controllers/studentController');
const verifyToken = require('../Middleware/verifyToken');

// Student routes to fetch data (only accessible by students)
router.get('/get-attendance', verifyToken, getAttendance);
router.get('/get-handouts', verifyToken, getHandouts);
router.get('/get-materials', verifyToken, getMaterials);
router.get('/get-assignments', verifyToken, getAssignments);

module.exports = router;
