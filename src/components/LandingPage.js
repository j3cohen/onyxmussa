import React, { useRef, useEffect } from 'react';
import { Box, Typography, Link, Container } from '@mui/material';
import HeroVideo from './HeroVideo';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';

const LandingPage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const opacity = Math.max(0, 1 - scrollPosition / heroHeight);
      heroRef.current.style.opacity = opacity;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box ref={heroRef} sx={{ height: '100vh', position: 'fixed', width: '100%', zIndex: -1 }}>
        <HeroVideo />
      </Box>
      <Container maxWidth="lg" sx={{ mt: '100vh', bgcolor: 'background.default', position: 'relative' }}>
        <PortfolioSection />
        <ContactSection />
      </Container>
    </Box>
  );
};

export default LandingPage;