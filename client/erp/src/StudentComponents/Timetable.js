import React from 'react';
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StudentTimetable = () => {
  const timetableData = [
    { day: 'Monday', subject: 'MSWD', time: '11:15 - 12:15 PM' },
    { day: 'Tuesday', subject: 'PSQT', time: '09:00 - 10:00 AM' },
    { day: 'Wednesday', subject: 'CTSD', time: '10:00 - 11:00 AM' },
    { day: 'Thursday', subject: 'AOOP', time: '09:00 - 10:00 AM' },
    { day: 'Friday', subject: 'NPS', time: '11:15 - 12:15 PM' },
  ];

  return (
    <Container>
      <center><h1>Student Timetable</h1></center>
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

export default StudentTimetable;
