import React, { useState } from 'react';
import {
  Card,
  Grid,
  Button,
  Typography,
  Box,
  CardContent,
  CardActions,
  Tooltip,
  IconButton,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TaskComponent(props) {
  const [buttonText, setButtonText] = useState(props.action);
  const [statusTask, setStatusTask] = useState(props.status);
  const [colorStatus, setColorStatus] = useState(getColor());

  function getColor() {
    switch (props.status) {
      case 'Nowe zadanie':
        return 'red';
      case 'W trakcie':
        return 'orange';
      case 'Wykonano':
        return 'green';
      default:
        return 'black';
    }
  }

  function handleButtonClick() {
    if (buttonText === 'Rozpocznij') {
      setButtonText('Zakończ');
      setStatusTask('W trakcie');
      setColorStatus('orange');
    } else if (buttonText === 'Zakończ') {
      setButtonText('Wykonano');
      setStatusTask('Wykonano');
      setColorStatus('green');
    }
  }

  return (
    <Card variant="outlined" sx={{ minWidth: 600, marginTop: 2 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={8}>
            <Typography sx={{ mb: 1.5 }} color={colorStatus} fontWeight="bold">
              Status: {statusTask}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Tooltip title={props.info}>
              <IconButton size="small">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          Powód: {props.reason}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="flex-end">
          <Button
            onClick={handleButtonClick}
            size="medium"
            variant="contained"
            disabled={buttonText === 'Wykonano'}
            endIcon={
              buttonText === 'Rozpocznij' ? (
                <PlayArrowIcon />
              ) : (
                <CheckCircleIcon />
              )
            }
            sx={{ minWidth: 150 }}
          >
            {buttonText}
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}
