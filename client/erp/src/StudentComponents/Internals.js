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

function InternalMarks() {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [marks, setMarks] = useState(null);

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fetchMarks = () => {
    const mockMarks = [
      { subject: 'CTOOD', marks: 75 },
      { subject: 'NPS', marks: 85 },
    ];

    setMarks(mockMarks);
  };

  return (
    <div>
      <center><h1>Internal Marks</h1></center>
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

            <Button variant="contained" color="primary" onClick={fetchMarks}>
              Search
            </Button>
          </Stack>
        </Paper>
      </center>

      {marks && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Marks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {marks.map((mark, index) => (
                <TableRow key={index}>
                  <TableCell>{mark.subject}</TableCell>
                  <TableCell>{mark.marks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default InternalMarks;
