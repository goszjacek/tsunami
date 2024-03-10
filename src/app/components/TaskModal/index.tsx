import React, { useState } from 'react';
import { Modal, Box, Typography, Button, TextField, Grid } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoopIcon from '@mui/icons-material/Loop';
import PendingIcon from '@mui/icons-material/Pending';

const TodoListModal = ({ open, handleClose }) => {
  const [notes, setNotes] = useState('Zadzwoń do Hani S.');

  const handleCloseModal = () => {
    console.log('Modal closed', open);
    handleClose();
  };

  const handleSave = () => {
    // Handle save logic with checkedItemsd
    handleCloseModal();
  };

  // function setNotes(value: string): void {}

  function handleButtonClick(arg0: string): void {
    console.log(arg0);
  }

  return (
    <Modal open={open} onClose={handleCloseModal} aria-labelledby="modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Typography variant="h5" id="modal-title" marginBottom={2}>
              Audyt polityki prywatności po wdrozeniu "AI Service" za miesiąc
              19.05.2025
            </Typography>
            {/* <Typography sx={{ fontWeight: 'bold' }}> AI Act </Typography> */}
            <Typography sx={{ fontWeight: 'bold' }}>
              {' '}
              art. 11 ust. 1:
            </Typography>
            <Typography variant="body1">
              The technical documentation of a high-risk AI system shall be
              drawn up before that system is placed on the market or put into
              service and shall be kept up-to date.
            </Typography>
            <Grid container display="flex" flexDirection="column" marginTop={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('Button 1 clicked')}
              >
                WYMOGI TECHNICZNE
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleButtonClick('Button 2 clicked')}
                sx={{ marginTop: 2 }}
              >
                PRZEPISY DOTYCZĄCE ZADANIA
              </Button>
              <Button
                variant="contained"
                color="info"
                onClick={() => handleButtonClick('Button 3 clicked')}
                sx={{ marginTop: 2 }}
              >
                PROCEDURĘ AKTUALIZACJI
              </Button>
            </Grid>
            <TextField
              label="Notatki"
              variant="outlined"
              multiline
              rows={5}
              value={notes}
              onChange={e => setNotes(e.target.value)}
              fullWidth
              margin="normal"
              sx={{ marginTop: 2 }}
            />
          </Grid>
          <Grid
            container
            display="flex"
            flexDirection="column"
            item
            xs={4}
            spacing={2}
          >
            <Grid
              item
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              Dodaj do Kalendarza
              <CalendarMonthIcon />
            </Grid>
            <Grid
              item
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              Powtórz
              <LoopIcon />
            </Grid>
            <Grid
              item
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography color="red">Status: Nowe zadanie</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" marginTop={2}>
          {/* <Button variant="contained" color="primary" onClick={handleSave}>
            Dodaj jako zadanie
          </Button> */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseModal}
          >
            Zamknij
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TodoListModal;
