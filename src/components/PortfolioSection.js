import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const portfolioItems = [
  { title: 'Lighting', videoUrl: 'https://www.youtube.com/embed/moAfqFo3f00' },
  { title: 'Assistant Camera and Drone', videoUrl: 'https://www.youtube.com/embed/ULjGbYWbJDU' },
  { title: 'Camera', videoUrl: 'https://www.instagram.com/p/CzMeq4rPI6Z/embed' },
  { title: 'Drone', videoUrl: 'https://www.youtube.com/embed/HeZck91SBIY' },
  { title: 'Drone', videoUrl: 'https://vimeo.com/921814656/686ea8af77?share=copy#t=70.283' },
  { title: 'General Production 1', videoUrl: 'https://www.youtube.com/embed/sc8DXDWRKac' },
  { title: 'General Production 2', videoUrl: 'https://www.youtube.com/embed/hklSInDi5Rc' },
];

const PortfolioSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioSection;