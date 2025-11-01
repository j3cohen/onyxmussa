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
  { title: 'LIGHTING', videoUrl: 'https://www.youtube.com/embed/moAfqFo3f00' },
  { title: 'ASSISTANT CAMERA AND DRONE', videoUrl: 'https://www.youtube.com/embed/ULjGbYWbJDU' },
  { title: 'CAMERA', videoUrl: 'https://www.instagram.com/p/CzMeq4rPI6Z/embed' },
  { title: 'DRONE', videoUrl: 'https://www.youtube.com/embed/HeZck91SBIY' },
  { title: 'GENERAL PRODUCTION 1', videoUrl: 'https://www.youtube.com/embed/sc8DXDWRKac' },
  { title: 'GENERAL PRODUCTION 2', videoUrl: 'https://www.youtube.com/embed/hklSInDi5Rc' },

  // Production Coordinator
  { title: 'PRODUCTION COORDINATOR - DEBS HOUSE SEASON 2', videoUrl: 'https://www.youtube.com/embed/GevNlbu-c4g' },

  // Production Assistant
  { title: 'PRODUCTION ASSISTANT - PAID IN FULL BBC DOCUSERIES', videoUrl: 'https://www.youtube.com/embed/o64mQaHlStk' },
  { title: 'PRODUCTION ASSISTANT - NEWMAN’S PIZZA COMMERCIAL', videoUrl: 'https://www.tiktok.com/embed/7283951484981710126' },
  { title: 'PRODUCTION ASSISTANT - RETAIL ME NOT COMMERCIAL', videoUrl: 'https://www.youtube.com/embed/OQKaBTMbTXQ' },
  { title: 'PRODUCTION ASSISTANT - STAPLE 21 MERCER GRAND OPENING COMMERCIAL', videoUrl: 'https://www.instagram.com/reel/DJb9jdSRkMi/embed' },
  { title: 'PRODUCTION ASSISTANT - JERSEY SHORE FAMILY VACATION SEASON 7', videoUrl: 'https://www.youtube.com/embed/6UW4Ydnmvv4' },
  { title: 'PRODUCTION ASSISTANT - GOOGLE PIXEL LOLA BROOKE COMMERCIAL', videoUrl: 'https://www.ebony.com/video/google-pixel-represents-lola-brooke/' },
  { title: 'PRODUCTION ASSISTANT - TIAA AND WYCLEF JEAN COMMERCIAL', videoUrl: 'https://www.tiktok.com/embed/7324750512732081451' },

  // Swing
  { title: 'SWING - ARYNA SABALENKA TAKES NEW YORK CITY (OFF DAY)', videoUrl: 'https://www.youtube.com/embed/aD6ul6SNVl8' },
  { title: 'SWING - NEW YORK CITY MARATHON SPONSORED BY NEW BALANCE', videoUrl: 'https://www.tiktok.com/embed/7433574655476124961' },
  { title: 'SWING - KC CHIEFS COMMERCIAL W/ CHRISTOPHER MELONI (START @4 MINUTES)', videoUrl: 'https://www.youtube.com/embed/_027x-xqqdU' },
  { title: 'SWING - O\'SHAQUIE FOSTER WITH MARK KREIGEL INTERVIEW FOR TOP RANK', videoUrl: 'https://www.youtube.com/embed/6z2EUFLr7HU' },
  { title: 'SWING - SHAKUR STEVENSON WITH MARK KREIGEL INTERVIEW FOR TOP RANK', videoUrl: 'https://www.instagram.com/reel/C9F_Ck4u2co/embed' },
  { title: 'SWING - BRUCE CARRINGTON WITH MARK KREIGEL INTERVIEW FOR TOP RANK', videoUrl: 'https://www.instagram.com/reel/DAYwE9zuxiX/embed' },
  { title: 'SWING - MIKAELA MAYER VS SANDY RYAN WITH MARK KREIGEL INTERVIEW FOR TOP RANK', videoUrl: 'https://www.instagram.com/reel/DAcHcJ4S2ro/embed' },

  // Scenic
  { title: 'SCENIC - 2024 LIGHTSCAPE BOTANICAL GARDENS', videoUrl: 'https://www.youtube.com/embed/9UGiypX9SSQ' },

  // Sky Cam Utility
  { title: 'SKY CAM UTILITY - ESPN NAVY VS NOTRE DAME GAME', videoUrl: 'https://www.youtube.com/embed/F_O6FdBzH90' },
  { title: 'SKY CAM UTILITY - ESPN GIANTS VS JETS GAME', videoUrl: 'https://www.youtube.com/embed/Adtwip2ykKc' },

  // BTS
  { title: 'BTS - X MEN MANSION BY AIRBNB', videoUrl: 'https://www.youtube.com/embed/RUPPRDQo7vo' },
];

// ⬇️ Add this helper just above your component
function Embed({ src, title }) {
  const canEmbed = /youtube\.com\/embed|instagram\.com\/.+\/embed|tiktok\.com\/embed/i.test(src);

  if (canEmbed) {
    return (
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
      />
    );
  }

  // Fallback: black 16:9 box with “Click to view on [domain]”
  let domain = 'source';
  try {
    const u = new URL(src);
    domain = u.hostname.replace(/^www\./, '');
  } catch {}
  const displayDomain = domain.charAt(0).toUpperCase() + domain.slice(1);

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        textAlign: 'center',
        padding: '0 16px',
      }}
      aria-label={`Open ${title} on ${displayDomain}`}
    >
      {`Click to view on ${displayDomain}`}
    </a>
  );
}

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
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
          marginTop: '64px',
          height: '100vh',
          position: 'relative',
          overflowY: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {!videoLoaded && (
            <Box sx={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
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
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              border: 'none', opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out',
            }}
          />
        </Box>

        {/* Featured Work: Drone FPV */}
        <Box sx={{ position: 'relative', width: '100%', mt: 4 }}>
          <Container maxWidth="md">
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: 'primary.main' }}>
              FEATURED WORK: DRONE FPV REAL ESTATE
            </Typography>
            <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/Cba8F7xzrB0"
                title="Drone FPV"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </Box>
          </Container>
        </Box>

        {/* Portfolio Section */}
        <Container maxWidth="lg" sx={{ mt: 4, position: 'relative', zIndex: 1 }}>
          <Typography id="portfolio" variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4, color: 'primary.main', pt: 8 }}>
            PORTFOLIO
          </Typography>
          <Grid container spacing={4}>
            {portfolioItems.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                    {/* ⬇️ use Embed instead of raw iframe */}
                    <Embed src={item.videoUrl} title={item.title} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Contact Section */}
          <Box id="contact" sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: 'primary.main' }}>
              CONTACT
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: 'primary.main' }}>
              ONYXFILMS@GMAIL.COM
            </Typography>
            <Grid container justifyContent="center" spacing={2} sx={{ mt: 2 }}>
              <Grid item>
                <Button href="https://www.instagram.com/dronievroom/" target="_blank" rel="noopener noreferrer" color="primary">
                  Instagram
                </Button>
              </Grid>
              <Grid item>
                <Button href="https://www.imdb.com/name/nm14193771/" target="_blank" rel="noopener noreferrer" color="primary">
                  IMDb
                </Button>
              </Grid>
              <Grid item>
                <Button href="https://www.linkedin.com/in/onyx-mussa/" target="_blank" rel="noopener noreferrer" color="primary">
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
