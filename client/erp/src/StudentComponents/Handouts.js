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
} from '@mui/material';

function Handouts() {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [handouts, setHandouts] = useState(null);

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fetchHandouts = () => {
    const mockHandouts = [
      { subject: 'AIML', handout: 'Lecture 1 - Introduction to AI' },
      { subject: 'MSWD', handout: 'Lecture 2 - Web Development' },
    ];

    setHandouts(mockHandouts);
  };

  return (
    <div>
      <center><h1>Handouts</h1></center>
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

            <Button variant="contained" color="primary" onClick={fetchHandouts}>
              Search
            </Button>
          </Stack>
        </Paper>
      </center>

      {handouts && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Handout</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handouts.map((handout, index) => (
                <TableRow key={index}>
                  <TableCell>{handout.subject}</TableCell>
                  <TableCell>{handout.handout}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Handouts;
