import {
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  CircularProgress,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ handleAuthToggle, handleRoleChange }) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(1);
  const [id, setId] = useState(''); // email as ID
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Static members
  const staticMembers = [
    { role: 'student', email: 'student1@example.com', password: 'password123' },
    { role: 'student', email: 'student2@example.com', password: 'password123' },
    { role: 'student', email: 'student3@example.com', password: 'password123' },
    { role: 'faculty', email: 'faculty1@example.com', password: 'password123' },
    { role: 'faculty', email: 'faculty2@example.com', password: 'password123' },
  ];

  const handleLogin = () => {
    // Validate input
    if (!id || !password) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    // Check credentials
    const user = staticMembers.find(
      (member) => member.email === id && member.password === password
    );

    if (user) {
      // Valid user
      handleRoleChange(selectedRole);
      handleAuthToggle();

      localStorage.setItem('token', 'dummy-jwt-token'); // Simulate login

      if (user.role === 'student') {
        navigate('/student/home');
      } else if (user.role === 'faculty') {
        navigate('/faculty/home');
      }
    } else {
      // Invalid user
      setErrorMessage('Invalid email or password. Please try again.');
    }

    setLoading(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${process.env.PUBLIC_URL}/logokl.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '10px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <img
          src={`${process.env.PUBLIC_URL}/kl-removebg-preview.png`}
          alt="College Logo"
          style={{ width: '150px', height: '150px', objectFit: 'contain' }}
        />
      </div>

      <FormControl
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Paper elevation={12} style={{ width: '400px', padding: '20px', backgroundColor: 'white' }}>
          <Stack spacing={3}>
            <FormControl variant="filled">
              <InputLabel>Select Role</InputLabel>
              <Select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <MenuItem value={1}>
                  <center>Student</center>
                </MenuItem>
                <MenuItem value={2}>
                  <center>Faculty</center>
                </MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="filled"
              label="Email"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              variant="filled"
              label="Password"
              type={showPassword ? 'text' : 'password'} // Toggle between text and password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {errorMessage && <p style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : 'Login'}
            </Button>
            <div
              style={{
                marginTop: '2px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                width: '100%',
                color: 'darkblue',
              }}
            >
              <p style={{ margin: '2', fontSize: 'small' }}>Forgot Password?</p>
            </div>
          </Stack>
        </Paper>
      </FormControl>
    </div>
  );
}

export default LoginPage;
