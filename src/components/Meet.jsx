import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';

const GoogleMeetWidget = () => {
  const [meetLink, setMeetLink] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setMeetLink(event.target.value);
  };

  const joinMeeting = () => {
    if (validateLink(meetLink)) {
      window.open(meetLink, '_blank');
    } else {
      setError('Invalid Google Meet link.');
    }
  };

  const validateLink = (link) => {
    const regex = /^(https:\/\/meet\.google\.com\/[a-zA-Z0-9-]+)$/;
    return regex.test(link);
  };

  return (
    <Card sx={{ maxWidth: 265, ml: 3, mt: -8, px: 2, pt: 1, pb:2, boxShadow: 3, borderRadius: 5 }}>
      <CardContent>
        <p className='text-lg'>
          Google Meet
        </p>
        <TextField
          fullWidth
          label="Google Meet Link"
          variant="outlined"
          value={meetLink}
          onChange={handleInputChange}
          error={!!error}
          helperText={error}
          sx={{ my: 1 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={joinMeeting}
          fullWidth
          sx={{ py: 1,
                mb: -2,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                fontWeight: 'medium'
          }}
        >
          Join Meeting
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoogleMeetWidget;
