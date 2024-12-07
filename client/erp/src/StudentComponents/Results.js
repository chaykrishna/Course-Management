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

function Results() {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [results, setResults] = useState(null);

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fetchResults = () => {
    // Mock data for results
    const mockResults = [
      { subject: 'CTOOD', result: 'Passed', marks: '85%' },
      { subject: 'NPS', result: 'Passed', marks: '78%' },
      { subject: 'AIML', result: 'Failed', marks: '45%' },
      { subject: 'MSWD', result: 'Passed', marks: '92%' },
      { subject: 'PSQT', result: 'Passed', marks: '88%' },
    ];

    setResults(mockResults);
  };

  return (
    <div>
      <center><h1>Results</h1></center>
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

            <Button variant="contained" color="primary" onClick={fetchResults}>
              Search
            </Button>
          </Stack>
        </Paper>
      </center>

      {results && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Marks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.subject}</TableCell>
                  <TableCell>{result.result}</TableCell>
                  <TableCell>{result.marks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Results;
