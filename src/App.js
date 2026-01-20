// src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container, Typography, Grid, CircularProgress, AppBar, Toolbar, Button } from '@mui/material';
import { portfolioItems } from './portfolioData';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffffff' },
    background: { default: '#000000', paper: '#121212' },
  },
  typography: { fontFamily: '"Helvetica Neue", Arial, sans-serif' },
});

// Replaces your raw iframe so non-embeddable URLs still render nicely
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

  // Fallback: black 16:9 box with "Click to view on [domain]"
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

// Converts normal watch/share URLs into iframe-ready embed URLs
function toEmbedUrl(url) {
  if (!url) return url;
  let u;
  try { u = new URL(url.trim()); } catch { return url; }

  const host = u.hostname.toLowerCase();

  // --- YouTube ---
  if (host.includes('youtube.com')) {
    const v = u.searchParams.get('v');
    if (v) return `https://www.youtube.com/embed/${v}`;
    const parts = u.pathname.split('/').filter(Boolean);
    const id = parts[parts.length - 1];
    if (id && parts[0] !== 'embed') return `https://www.youtube.com/embed/${id}`;
    return url;
  }
  if (host.includes('youtu.be')) {
    const id = u.pathname.split('/').filter(Boolean)[0];
    if (id) return `https://www.youtube.com/embed/${id}`;
    return url;
  }

  // --- TikTok ---
  if (host.includes('tiktok.com')) {
    const parts = u.pathname.split('/').filter(Boolean);
    const ix = parts.findIndex((p) => p === 'video');
    if (ix !== -1 && parts[ix + 1]) {
      const id = parts[ix + 1];
      return `https://www.tiktok.com/embed/v2/${id}`;
    }
    return url;
  }

  // --- Instagram ---
  if (host.includes('instagram.com')) {
    const parts = u.pathname.split('/').filter(Boolean);
    const type = parts[0];
    const code = parts[1];
    if ((type === 'reel' || type === 'p') && code) {
      return `https://www.instagram.com/${type}/${code}/embed`;
    }
    return url;
  }

  // --- Vimeo ---
  if (host.includes('vimeo.com')) {
    const id = u.pathname.split('/').filter(Boolean)[0];
    if (id && /^\d+$/.test(id)) return `https://player.vimeo.com/video/${id}`;
    return url;
  }

  // Others (e.g., ebony.com) stay as-is; <Embed/> will show the black box CTA
  return url;
}

export default function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setVideoLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load portfolio from local data file (already sorted by updated_at desc)
  useEffect(() => {
    const mapped = portfolioItems.map((row) => ({
      id: row.id,
      title: row.title,
      videoUrl: toEmbedUrl(row.video_url),
      role: row.role,
    }));
    setItems(mapped);
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
            {items.map((item) => (
              <Grid item xs={12} md={6} key={item.id || item.title}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
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