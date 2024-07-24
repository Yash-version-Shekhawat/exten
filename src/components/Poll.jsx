import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';

const Poll = () => {
  const [poll, setPoll] = useState({ question: '', options: [] });
  const [newOption, setNewOption] = useState('');
  const [vote, setVote] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [votes, setVotes] = useState({});

  const handleAddOption = () => {
    if (newOption.trim() !== '') {
      setPoll(prevPoll => ({
        ...prevPoll,
        options: [...prevPoll.options, newOption],
      }));
      setNewOption('');
    }
  };

  const handleVote = (event) => {
    setVote(event.target.value);
  };

  const submitVote = () => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [vote]: (prevVotes[vote] || 0) + 1,
    }));
    setShowResults(true);
  };

  return (
    <Container>
      <Paper sx={{ maxWidth: 265, padding: '16px', marginTop: '16px', fontFamily: 'Poppins, sans-serif', boxShadow: 3, borderRadius: 5  }}>
        <p className='text-lg'>
          Create Poll
        </p>
        <TextField
          fullWidth
          label="Poll Question"
          value={poll.question}
          onChange={(e) => setPoll({ ...poll, question: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="New Option"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          margin="normal"
          sx={{mt: -0}}
        />
        <div className='flex justify-center'>
        <Button variant="contained" color="primary" onClick={handleAddOption} sx={{ py: 1, fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 'medium'}}>
          Add Option
        </Button>
        </div>
        <p className='mt-3'>
          Options:
        </p>
        {poll.options.map((option, index) => (
          <Typography key={index}>{option}</Typography>
        ))}
      </Paper>
      {/*
      <Paper style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Vote
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup value={vote} onChange={handleVote}>
            {poll.options.map((option, index) => (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" onClick={submitVote} disabled={!vote}>
          Submit Vote
        </Button>
      </Paper>
      */}
      {showResults && (
        <Paper style={{ padding: '16px', marginTop: '16px' }}>
           <p className='text-lg'>
            Poll Results
          </p>
          {Object.entries(votes).map(([option, count], index) => (
            <Typography key={index}>
              {option}: {count} votes
            </Typography>
          ))}
        </Paper>
      )}
    </Container>
  );
};

export default Poll;