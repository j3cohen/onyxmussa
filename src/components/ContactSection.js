import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MovieIcon from '@mui/icons-material/Movie';

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: onyx.mussa@example.com
      </Typography>
      <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <Grid item>
          <Link href="https://www.instagram.com/dronievroom/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.imdb.com/name/nm14193771/" target="_blank" rel="noopener noreferrer">
            <MovieIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.linkedin.com/in/onyx-mussa/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;