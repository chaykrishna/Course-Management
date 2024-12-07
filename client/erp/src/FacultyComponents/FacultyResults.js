import React, { useState } from 'react';
import { Box, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Container, Stack, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function ResultsPage() {
  const [openDialog, setOpenDialog] = useState(false); // Dialog box state
  const [subject, setSubject] = useState(''); // Selected subject
  const [students, setStudents] = useState([
    { id: 1, name: 'Sahil', marks: '' },
    { id: 2, name: 'Krishna', marks: '' },
    { id: 3, name: 'Eswar', marks: '' },
  ]); // Static student data
  const [subjectList, setSubjectList] = useState(['CTOOD', 'MSWD', 'NPS', 'AIML']); // Static subjects list
  
  // Handle input changes for student marks
  const handleMarksChange = (id, marks) => {
    setStudents(students.map((student) => (student.id === id ? { ...student, marks } : student)));
  };

  // Handle posting results
  const handlePostResults = () => {
    // Here, you can add your logic to save results to your backend

    setOpenDialog(true); // Show success dialog
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md" sx={{ padding: '20px', backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ padding: '20px', width: '100%', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '20px' }}>
          Post Subject Results
        </Typography>

        {/* Subject Selection */}
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel>Select Subject</InputLabel>
          <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
            {subjectList.map((subj, index) => (
              <MenuItem key={index} value={subj}>
                {subj}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Student Marks Input */}
        <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
          {students.map((student) => (
            <Grid item xs={12} sm={6} md={4} key={student.id}>
              <Paper elevation={2} sx={{ padding: '10px', textAlign: 'center' }}>
                <Typography variant="h6">{student.name}</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Marks"
                  value={student.marks}
                  onChange={(e) => handleMarksChange(student.id, e.target.value)}
                  type="number"
                  sx={{ marginTop: '10px' }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Post Results Button */}
        <Button variant="contained" color="primary" onClick={handlePostResults} fullWidth>
          Post Results
        </Button>

        {/* Dialog Box for Confirmation */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Results Posted Successfully</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              The results for the subject <strong>{subject}</strong> have been successfully posted.
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

export default ResultsPage;
