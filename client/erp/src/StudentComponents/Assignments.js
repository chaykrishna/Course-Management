import React, { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

function Assignments() {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [assignments, setAssignments] = useState(null);

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fetchAssignments = () => {
    const mockAssignments = [
      { subject: 'CTOOD', assignment: 'Assignment 1 - Data Structures' },
      { subject: 'NPS', assignment: 'Assignment 2 - Algorithms' },
    ];

    setAssignments(mockAssignments);
  };

  return (
    <div>
      <center><h1>Assignments</h1></center>
      <center>
        <Paper elevation={12} style={{ width: '600px', padding: '35px', backgroundColor: 'white' }}>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel variant="filled">Select Academic Year</InputLabel>
              <Select value={academicYear} onChange={handleAcademicYearChange}>
                <MenuItem value={'2023-2024'}>2023-2024</MenuItem>
                <MenuItem value={'2022-2023'}>2022-2023</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel variant="filled">Select Semester</InputLabel>
              <Select value={semester} onChange={handleSemesterChange}>
                <MenuItem value={1}>Odd</MenuItem>
                <MenuItem value={2}>Even</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary" onClick={fetchAssignments}>
              Search
            </Button>
          </Stack>
        </Paper>
      </center>

      {assignments && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Assignment</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assignments.map((assignment, index) => (
                <TableRow key={index}>
                  <TableCell>{assignment.subject}</TableCell>
                  <TableCell>{assignment.assignment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Assignments;
