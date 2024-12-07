import React from 'react';
import { Paper, Typography, Grid, Divider, Button } from '@mui/material';
import { Phone, Home, AccountCircle } from '@mui/icons-material';

const FacultyProfile = () => {
  const userProfile = {
    name: "Chaitanya Malladi",
    department: "Computer Science",
    id: "F2300031138",
    phoneNumber: "+917670881453",
    address: "KL UNIVERSITY",
    gender: "Male",
  };

  return (
    <Paper elevation={12} style={{ padding: '30px', margin: '20px' }}>
            <center><h1>Faculty Profile</h1></center>

      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><AccountCircle /> <strong>Name:</strong> {userProfile.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>Department:</strong> {userProfile.department}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>ID:</strong> {userProfile.id}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><Phone /> <strong>Phone Number:</strong> {userProfile.phoneNumber}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><Home /> <strong>Address:</strong> {userProfile.address}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>Gender:</strong> {userProfile.gender}</Typography>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" style={{ marginTop: '20px', width: '100%' }}>
        Edit Profile
      </Button>
    </Paper>
  );
};

export default FacultyProfile;
