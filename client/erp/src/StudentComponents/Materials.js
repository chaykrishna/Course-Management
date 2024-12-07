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

function Materials() {
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [materials, setMaterials] = useState(null);

  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const fetchMaterials = () => {
    const mockMaterials = [
      { subject: 'PSQT', material: 'Material 1 - Quantum Mechanics' },
      { subject: 'AIML', material: 'Material 2 - Machine Learning' },
    ];

    setMaterials(mockMaterials);
  };

  return (
    <div>
      <center><h1>Materials</h1></center>
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

            <Button variant="contained" color="primary" onClick={fetchMaterials}>
              Search
            </Button>
          </Stack>
        </Paper>
      </center>

      {materials && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>Material</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materials.map((material, index) => (
                <TableRow key={index}>
                  <TableCell>{material.subject}</TableCell>
                  <TableCell>{material.material}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default Materials;
