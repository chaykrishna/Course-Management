// FacultyComponents/Timetable.js
import React from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FacultyTimetable = () => {
  const timetableData = [
    { day: 'Monday', subject: 'MSWD', time: '11:15 - 12:15 PM' },
    { day: 'Tuesday', subject: '-', time: '-' },
    { day: 'Tuesday', subject: 'LINUX', time: '10:15 - 11:15 AM' },
    { day: 'Wednesday', subject: 'MSWD', time: '10:00 - 11:00 AM' },
    { day: 'Thursday', subject: 'MSWD', time: '09:00 - 10:00 AM' },
  ];

  return (
    <Container>
      <center><h1>Faculty Timetable</h1></center>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {timetableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.subject}</TableCell>
                <TableCell>{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FacultyTimetable;
