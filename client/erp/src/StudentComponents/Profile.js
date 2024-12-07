import React from 'react';
import { Paper, Typography, Grid, Divider, Button } from '@mui/material';
import { Phone, Home, AccountCircle, Class } from '@mui/icons-material';

function Profile() {
  const userProfile = {
    name: "Chaitanya Malladi",
    department: "Computer Science",
    id: "2300031138",
    phoneNumber: "+917670881453",
    address: "KL UNIVERSITY",
    gender: "Male",
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 'calc(100vh - 100px)',
        backgroundColor: '#f5f5f5', 
      }}
    >
      <Paper 
        elevation={12} 
        style={{ 
          padding: '30px', 
          width: '400px', 
          borderRadius: '12px', 
          backgroundColor: '#ffffff', 
          marginTop: '20px' 
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Profile
        </Typography>
        <Divider style={{ marginBottom: '20px' }} />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><AccountCircle style={{ verticalAlign: 'middle', marginRight: '5px' }} /> <strong>Name:</strong> {userProfile.name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><Class style={{ verticalAlign: 'middle', marginRight: '5px' }} /> <strong>Department:</strong> {userProfile.department}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><strong>ID:</strong> {userProfile.id}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><Phone style={{ verticalAlign: 'middle', marginRight: '5px' }} /> <strong>Phone Number:</strong> {userProfile.phoneNumber}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><Home style={{ verticalAlign: 'middle', marginRight: '5px' }} /> <strong>Address:</strong> {userProfile.address}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1"><strong>Gender:</strong> {userProfile.gender}</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" style={{ marginTop: '20px', width: '100%' }}>
          Edit Profile
        </Button>
      </Paper>
    </div>
  );
}

document.body.style.overflow = 'hidden'; 
document.documentElement.style.height = '100%'; 
document.body.style.height = '100%'; 

export default Profile;
