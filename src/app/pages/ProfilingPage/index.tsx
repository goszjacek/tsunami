import React, { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Grid,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountBox } from '@mui/icons-material';

export const ProfilingPage = () => {
  const [mainActivity, setMainActivity] = useState('');
  const [legalForm, setLegalForm] = useState('');

  const handleMainActivityChange = event => {
    setMainActivity(event.target.value);
  };

  const handleLegalFormChange = event => {
    setLegalForm(event.target.value);
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AccountBox fontSize="large" />
      </Avatar>
      <Typography variant="h3" marginBottom={4}>
        Profilowanie firmy
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={4} margin="auto">
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Jaka jest główna działalność Twojej firmy?
            </FormLabel>
            <RadioGroup
              aria-label="mainActivity"
              name="mainActivity"
              value={mainActivity}
              onChange={handleMainActivityChange}
            >
              <FormControlLabel
                value="E-Commerce"
                control={<Radio />}
                label="E-Commerce"
              />
              <FormControlLabel
                value="usługi IT"
                control={<Radio />}
                label="Usługi IT"
              />
              <FormControlLabel
                value="Produkcja"
                control={<Radio />}
                label="Produkcja"
              />
              <FormControlLabel value="Inne" control={<Radio />} label="Inne" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item md={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Jaka jest forma prawna Twojej firmy?
            </FormLabel>
            <RadioGroup
              aria-label="legalForm"
              name="legalForm"
              value={legalForm}
              onChange={handleLegalFormChange}
            >
              <FormControlLabel
                value="jednoosobowa działalność gospodarcza"
                control={<Radio />}
                label="Jednoosobowa działalność gospodarcza"
              />
              <FormControlLabel
                value="spółka z ograniczoną odpowiedzialnością"
                control={<Radio />}
                label="Spółka z ograniczoną odpowiedzialnością"
              />
              <FormControlLabel
                value="spółka akcyjna"
                control={<Radio />}
                label="Spółka akcyjna"
              />
              <FormControlLabel
                value="Inna forma prawna"
                control={<Radio />}
                label="Inna forma prawna"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          container
          item
          md={12}
          justifyContent="center"
          display="flex"
          spacing={2}
        >
          <Grid item>
            <Link to="/Onboarding">
              <Button variant="contained" color="primary" type="submit">
                Wstecz
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/TaskList">
              <Button variant="contained" color="primary" type="submit">
                Profiluj
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
