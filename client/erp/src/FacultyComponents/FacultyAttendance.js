import React, { useState } from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

const FacultyAttendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Sahil', attendance: 'Present' },
    { id: 2, name: 'Krishna', attendance: 'Present' },
    { id: 3, name: 'Eshwar', attendance: 'Present' },
  ]);

  const [openDialog, setOpenDialog] = useState(false); // State for dialog

  const handleAttendanceChange = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, attendance: student.attendance === 'Present' ? 'Absent' : 'Present' }
          : student
      )
    );
  };

  const handleSubmit = () => {
    // Show the confirmation dialog when attendance is submitted
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    // Close the confirmation dialog
    setOpenDialog(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Student Attendance</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Absent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={student.attendance === 'Absent'}
                    onChange={() => handleAttendanceChange(student.id)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <center>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Submit Attendance
        </Button>
      </center>

      {/* Dialog to show confirmation message */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Attendance Submitted</DialogTitle>
        <DialogContent>
          <p>Attendance has been successfully submitted!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FacultyAttendance;
