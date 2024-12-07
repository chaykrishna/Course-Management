import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Rating, Paper, Container, Stack, Grid } from '@mui/material';

function FacultyFeedback() {
  const [studentName, setStudentName] = useState('');
  const [studentComments, setStudentComments] = useState('');
  const [studentRating, setStudentRating] = useState(0);

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., send data to backend)
    alert('Feedback submitted!');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={3} sx={{ padding: '20px', width: '100%', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          Professor Feedback Form
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Student's Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            fullWidth
            variant="filled"
          />
          <TextField
            label="Comments"
            value={studentComments}
            onChange={(e) => setStudentComments(e.target.value)}
            multiline
            rows={4}
            fullWidth
            variant="filled"
          />
          <Box>
            <Typography variant="h6">Student's Performance Rating</Typography>
            <Rating
              value={studentRating}
              onChange={(e, newValue) => setStudentRating(newValue)}
              precision={0.5}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
            Submit Feedback
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default FacultyFeedback;
