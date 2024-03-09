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
} from '@mui/material';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';

export default function TaskComponent(props) {
  const [buttonText, setButtonText] = useState(props.action);
  const [statusTask, setStatusTask] = useState(props.status);
  const [colorStatus, setColorStatus] = useState(getColor());

  function getColor() {
    if (props.status === 'Nowe zadanie') {
      return 'red';
    }
    if (props.status === 'W trakcie') {
      return 'orange';
    }
    if (props.status === 'Wykonano') {
      return 'green';
    }
  }

  function handleButtonClick() {
    if (buttonText === 'Rozpocznij') {
      setButtonText('Zakończ');
      setStatusTask('W trakcie');
      setColorStatus('orange');
    }
    if (buttonText === 'Zakończ') {
      setButtonText('Wykonano');
      setStatusTask('Wykonano');
      setColorStatus('green');
    }
  }

  return (
    <Box sx={{ minWidth: 600 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Grid container>
              <Grid item xs={10}>
                <Typography
                  sx={{ mb: 1.5, alignContent: 'left' }}
                  color={colorStatus}
                >
                  Status: {statusTask}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Tooltip title={props.info}>
                  <InfoIcon />
                </Tooltip>
              </Grid>
            </Grid>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2">Powód: {props.reason}</Typography>
          </CardContent>
          <Grid container>
            <Grid item xs={9}></Grid>
            <Grid item xs={3}>
              <CardActions style={{ display: 'flex', alignItems: 'right' }}>
                <Button
                  onClick={() => handleButtonClick()}
                  size="small"
                  variant="contained"
                  disabled={buttonText === 'Wykonano'}
                >
                  {buttonText}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </React.Fragment>
      </Card>
    </Box>
  );
}
