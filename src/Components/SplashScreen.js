import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const SplashScreen = () => (
  <Box
    sx={{
      height: '94vh',
      width: '98vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    }}
  >
    <CircularProgress size={60} />
    <Typography variant="h6" sx={{ mt: 2 }}>
      Loading...
    </Typography>
  </Box>
);

export default SplashScreen;
