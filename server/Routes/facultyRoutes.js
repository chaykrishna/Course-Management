const express = require('express');
const router = express.Router();
const { postAttendance, uploadHandouts, uploadMaterials, createAssignment } = require('../Controllers/facultyController');
const verifyToken = require('..id/Middleware/verifyToken');

// Faculty routes to post data (only accessible by faculty)
router.post('/post-attendance', verifyToken, postAttendance);
router.post('/upload-handouts', verifyToken, uploadHandouts);
router.post('/upload-materials', verifyToken, uploadMaterials);
router.post('/create-assignment', verifyToken, createAssignment);

module.exports = router;
