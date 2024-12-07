const Handouts = require('../Models/handouts');
const Materials = require('..Models/materials');
const Assignments = require('../Models/assignments');

// GET: Student can view attendance
const getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ studentId: req.user.id });
    res.status(200).json(attendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

// GET: Student can view handouts
const getHandouts = async (req, res) => {
  try {
    const handouts = await Handouts.find({ courseId: req.user.courseId });
    res.status(200).json(handouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

// GET: Student can view materials
const getMaterials = async (req, res) => {
  try {
    const materials = await Materials.find({ courseId: req.user.courseId });
    res.status(200).json(materials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

// GET: Student can view assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignments.find({ courseId: req.user.courseId });
    res.status(200).json(assignments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

module.exports = {
  getAttendance,
  getHandouts,
  getMaterials,
  getAssignments,
};
