const Handouts = require('../Models/handouts');
const Materials = require('../Models/materials');
const Assignments = require('../Models/assignments');

// POST: Faculty can post attendance for a class
async function postAttendance(req, res) {
    const { courseId, studentId, status } = req.body; // Attendance info

    try {
        const newAttendance = new Attendance({
            facultyId: req.user.id, // From JWT token
            courseId,
            studentId,
            status,
        });

        await newAttendance.save();
        res.status(201).json({ message: 'Attendance recorded successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again.' });
    }
}

// POST: Faculty can upload handouts
const uploadHandouts = async (req, res) => {
  const { courseId, fileUrl } = req.body; // Handout info

  try {
    const newHandout = new Handouts({
      facultyId: req.user.id, // From JWT token
      courseId,
      fileUrl,
    });

    await newHandout.save();
    res.status(201).json({ message: 'Handout uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

// POST: Faculty can upload materials (e.g., lecture notes)
const uploadMaterials = async (req, res) => {
  const { courseId, fileUrl, materialType } = req.body; // Material info

  try {
    const newMaterial = new Materials({
      facultyId: req.user.id, // From JWT token
      courseId,
      fileUrl,
      materialType, // e.g., 'lecture notes', 'video', etc.
    });

    await newMaterial.save();
    res.status(201).json({ message: 'Material uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

// POST: Faculty can create assignments
const createAssignment = async (req, res) => {
  const { courseId, assignmentTitle, deadline, description } = req.body; // Assignment info

  try {
    const newAssignment = new Assignments({
      facultyId: req.user.id, // From JWT token
      courseId,
      assignmentTitle,
      deadline,
      description,
    });

    await newAssignment.save();
    res.status(201).json({ message: 'Assignment created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again.' });
  }
};

module.exports = {
  postAttendance,
  uploadHandouts,
  uploadMaterials,
  createAssignment,
};
