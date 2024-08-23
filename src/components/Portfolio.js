import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Portfolio = () => {
  const showVimeo = false; // Set this to true to show the iframe, false to show the fallback link

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Portfolio</Typography>
      
      {/* Lighting Category */}
      <Typography variant="h5" gutterBottom>Lighting</Typography>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/moAfqFo3f00"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Assistant Camera and Drone Category */}
      <Typography variant="h5" gutterBottom>Assistant Camera and Drone</Typography>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ULjGbYWbJDU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Camera Category */}
      <Typography variant="h5" gutterBottom>Camera</Typography>
      <iframe
        src="https://www.instagram.com/p/CzMeq4rPI6Z/embed"
        width="400"
        height="480"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
      ></iframe>
      
      {/* Drone Category */}
      <Typography variant="h5" gutterBottom>Drone</Typography>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HeZck91SBIY"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      {/* Vimeo Fallback */}
      {showVimeo ? (
        <iframe
          width="560"
          height="315"
          src="https://player.vimeo.com/video/921814656"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Watch the video on Vimeo: 
          <Link href="https://vimeo.com/921814656" target="_blank" rel="noopener">
            Free arts program - Time mark 1:11
          </Link>
        </Typography>
      )}
      
      {/* General Production Category */}
      <Typography variant="h5" gutterBottom>General Production</Typography>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sc8DXDWRKac"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hklSInDi5Rc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </Box>
  );
};

export default Portfolio;
