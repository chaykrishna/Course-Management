import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Container, Stack, Grid } from '@mui/material';

function AssignmentPage() {
  const [openDialog, setOpenDialog] = useState(false); // Dialog box state
  const [selectedCourse, setSelectedCourse] = useState(null); // To track the selected course

  const courses = [
    { id: 1, name: 'CTOOD 101' },
    { id: 2, name: 'NPS 201' },
    { id: 3, name: 'DBMS 301' },
    { id: 4, name: 'AIML 401' },
    { id: 5, name: 'PSQT 501' },
  ];

  const handlePostAssignment = (course) => {
    setSelectedCourse(course);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container
      maxWidth="md"
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
          
        </Typography>

        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.id}>
              <Paper elevation={2} sx={{ padding: '10px', textAlign: 'center' }}>
                <Typography variant="h6">{course.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '10px' }}
                  onClick={() => handlePostAssignment(course)}
                >
                  Post Assignment
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Dialog Box for Confirmation */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Assignment Posted</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              The Assignment for <strong>{selectedCourse?.name}</strong> has been posted successfully.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Container>
  );
}

export default AssignmentPage;
