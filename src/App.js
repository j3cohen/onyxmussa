import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container, Typography, Grid, CircularProgress, AppBar, Toolbar, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffffff' },
    background: { default: '#000000', paper: '#121212' },
  },
  typography: { fontFamily: '"Helvetica Neue", Arial, sans-serif' },
});

const portfolioItems = [
  { title: 'Lighting', videoUrl: 'https://www.youtube.com/embed/moAfqFo3f00' },
  { title: 'Assistant Camera and Drone', videoUrl: 'https://www.youtube.com/embed/ULjGbYWbJDU' },
  { title: 'Camera', videoUrl: 'https://www.instagram.com/p/CzMeq4rPI6Z/embed' },
  { title: 'Drone', videoUrl: 'https://www.youtube.com/embed/HeZck91SBIY' },
  { title: 'General Production 1', videoUrl: 'https://www.youtube.com/embed/sc8DXDWRKac' },
  { title: 'General Production 2', videoUrl: 'https://www.youtube.com/embed/hklSInDi5Rc' },
];

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* AppBar */}
        <AppBar position="fixed" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Onyx Mussa
            </Typography>
            <Button color="inherit" onClick={() => scrollToSection('portfolio')}>Portfolio</Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Video Section */}
        <Box sx={{
          marginTop: '64px', // Offset for the fixed AppBar
          height: '100vh', // Always fills the screen height
          position: 'relative',
          overflowY: 'auto', // Ensure scrollability on mobile
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {!videoLoaded && (
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background.default'
            }}>
              <CircularProgress />
            </Box>
          )}
          <iframe
            src="https://www.youtube.com/embed/fDuKGoFt7LA?autoplay=1&mute=1&controls=0&loop=1&playlist=fDuKGoFt7LA"
            title="Hero Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
            }}
          />
        </Box>

        {/* Featured Work: Drone FPV */}
        <Box sx={{ position: 'relative', width: '100%', mt: 4 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: 'primary.main' }}>
              Featured Work: Drone FPV Real Estate
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/Cba8F7xzrB0" // YouTube Short for Drone FPV
                title="Drone FPV"
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
          </Container>
        </Box>

        {/* Portfolio Section */}
        <Container maxWidth="lg" sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
          <Typography id="portfolio" variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: 'primary.main', pt: 8 }}>
            Portfolio
          </Typography>
          <Grid container spacing={4}>
            {portfolioItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
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

          {/* Contact Section */}
          <Box id="contact" sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              Contact
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'primary.main' }}>
              Email: onyxfilms@gmail.com
            </Typography>
            <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Button
                  href="https://www.instagram.com/dronievroom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  Instagram
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href="https://www.imdb.com/name/nm14193771/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  IMDb
                </Button>
              </Grid>
              <Grid item>
                <Button
                  href="https://www.linkedin.com/in/onyx-mussa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  LinkedIn
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
