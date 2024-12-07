import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Rating, Paper, Container, Stack, Grid } from '@mui/material';

function FeedbackForm() {
  const [professorName, setProfessorName] = useState('');
  const [courseComments, setCourseComments] = useState('');
  const [professorRating, setProfessorRating] = useState(0);

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
          Student Feedback Form
        </Typography>
        <Stack spacing={3}>
          <TextField
            label="Professor's Name"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
            fullWidth
            variant="filled"
          />
          <TextField
            label="Course Comments"
            value={courseComments}
            onChange={(e) => setCourseComments(e.target.value)}
            multiline
            rows={4}
            fullWidth
            variant="filled"
          />
          <Box>
            <Typography variant="h6">Professor's Teaching Rating</Typography>
            <Rating
              value={professorRating}
              onChange={(e, newValue) => setProfessorRating(newValue)}
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

export default FeedbackForm;
