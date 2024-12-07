import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: 'red',
        borderTop: '2px solid red',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px 0',
      }}
    >
      <Typography variant="body2" align="center" color="white" fontWeight="bold">
        © {new Date().getFullYear()} KL UNIVERSITY. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
