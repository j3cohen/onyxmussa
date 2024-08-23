import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MovieIcon from '@mui/icons-material/Movie'; // Assuming IMDb doesn't have a dedicated icon, we use a generic movie icon.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual API call to send data
    alert('Your message has been sent!');
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>Contact Onyx Mussa</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Connect with Onyx on social media:</Typography>
        <Link href="https://www.instagram.com/dronievroom/" target="_blank" rel="noopener" sx={{ mr: 2 }}>
          <InstagramIcon sx={{ verticalAlign: 'middle' }} /> Instagram
        </Link>
        <Link href="https://www.linkedin.com/in/onyx-mussa/" target="_blank" rel="noopener" sx={{ mr: 2 }}>
          <LinkedInIcon sx={{ verticalAlign: 'middle' }} /> LinkedIn
        </Link>
        <Link href="https://www.imdb.com/name/nm14193771/" target="_blank" rel="noopener">
          <MovieIcon sx={{ verticalAlign: 'middle' }} /> IMDb
        </Link>
      </Box>
    </Box>
  );
};

export default ContactForm;
