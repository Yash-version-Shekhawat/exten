import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

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
    <Card sx={{ maxWidth: 273, px: 2, pb:2, borderRadius: 6, height: 150, backgroundColor: '#716af210'}}>
      <CardContent>
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
          onClick={joinMeeting}
          fullWidth
          sx={{ 
                mb: -2,
                fontFamily: 'Poppins, sans-serif',
                fontSize: '13px',
                fontWeight: 'medium',
                backgroundColor: '#716af2',
                borderRadius: 2,
                height: '40px'
          }}
        >
          Join Meeting
        </Button>
      </CardContent>
    </Card>
  );
};

export default GoogleMeetWidget;
