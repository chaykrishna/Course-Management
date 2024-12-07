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

function AttendanceTable() {
  // State to store selected academic year, semester, and attendance data
  const [academicYear, setAcademicYear] = useState('');
  const [semester, setSemester] = useState('');
  const [attendance, setAttendance] = useState(null); // To store attendance data when fetched

  // Handle selection changes
  const handleAcademicYearChange = (event) => {
    setAcademicYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  // Simulate fetching attendance data based on selected academic year and semester
  const fetchAttendance = () => {
    // Mock attendance data (this would normally come from an API)
    const attendanceData = {
      '2023-2024': {
        Odd: { CTOOD: 80, NPS: 90, AIML: 85, MSWD: 75, PSQT: 88 },
        Even: { CTOOD: 78, NPS: 88, AIML: 92, MSWD: 80, PSQT: 84 },
      },
      '2022-2023': {
        Odd: { CTOOD: 70, NPS: 80, AIML: 78, MSWD: 70, PSQT: 76 },
        Even: { CTOOD: 75, NPS: 85, AIML: 80, MSWD: 72, PSQT: 78 },
      },
    };

    // Fetch the data based on selected academic year and semester
    if (academicYear && semester) {
      setAttendance(attendanceData[academicYear][semester]);
    }
  };

  return (
    <div>
      <center>
        <h1>Attendance Table</h1>
      </center>
      <center>
        <Paper elevation={12} style={{ width: '600px', padding: '35px', backgroundColor: 'white' }}>
          <Stack spacing={3}>
            <FormControl fullWidth>
              <InputLabel variant="filled">Select Academic Year</InputLabel>
              <Select value={academicYear} onChange={handleAcademicYearChange}>
                <MenuItem value={'2023-2024'}>2023-2024</MenuItem>
                <MenuItem value={'2022-2023'}>2022-2023</MenuItem>
                <MenuItem value={'2021-2022'}>2021-2022</MenuItem>
                <MenuItem value={'2020-2021'}>2020-2021</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel variant="filled">Select Semester</InputLabel>
              <Select value={semester} onChange={handleSemesterChange}>
                <MenuItem value={'Odd'}>Odd</MenuItem>
                <MenuItem value={'Even'}>Even</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                style={{ width: '25%' }}
                variant="contained"
                onClick={fetchAttendance}
              >
                Search
              </Button>
              <Button style={{ width: '25%' }} variant="outlined" onClick={() => { setAcademicYear(''); setSemester(''); setAttendance(null); }}>
                Reset
              </Button>
            </Stack>

            {/* Display attendance table when data is fetched */}
            {attendance && (
              <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Attendance Percentage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.keys(attendance).map((subject) => (
                      <TableRow key={subject}>
                        <TableCell>{subject}</TableCell>
                        <TableCell>{attendance[subject]}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}

            {/* Display message if no data is fetched */}
            {!attendance && academicYear && semester && (
              <Typography variant="body1" align="center" color="textSecondary" style={{ marginTop: '20px' }}>
                Please click 'Search' to view the attendance data.
              </Typography>
            )}
          </Stack>
        </Paper>
      </center>
    </div>
  );
}

export default AttendanceTable;
