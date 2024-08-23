import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Featured Work
      </Typography>
      <video width="100%" controls>
        <source src="https://www.youtube.com/watch?v=moAfqFo3f00" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video width="100%" controls>
        <source src="https://www.youtube.com/watch?v=ULjGbYWbJDU" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default Home;
