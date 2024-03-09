import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const ProfilingPage = () => {
  const [mainActivity, setMainActivity] = useState('');
  const [legalForm, setLegalForm] = useState('');

  const handleMainActivityChange = (event) => {
    setMainActivity(event.target.value);
  };

  const handleLegalFormChange = (event) => {
    setLegalForm(event.target.value);
  };

  return (
    <div>
      <h2>Profilowanie firmy</h2>
      <FormControl component="fieldset">
        <FormLabel component="legend">Jaka jest główna działalność Twojej firmy?</FormLabel>
        <RadioGroup
          aria-label="mainActivity"
          name="mainActivity"
          value={mainActivity}
          onChange={handleMainActivityChange}
        >
          <FormControlLabel value="sprzedaż detaliczna" control={<Radio />} label="Sprzedaż detaliczna" />
          <FormControlLabel value="usługi IT" control={<Radio />} label="Usługi IT" />
          <FormControlLabel value="Produkcja" control={<Radio />} label="Produkcja" />
          <FormControlLabel value="Inne" control={<Radio />} label="Inne" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Jaka jest forma prawna Twojej firmy?</FormLabel>
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

     
      <Link to="/TaskList">
      <Button variant="contained" color="primary" type="submit">
        Wyślij
      </Button>
            </Link>
    </div>
  );
};