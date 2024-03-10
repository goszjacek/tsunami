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
import InfoIcon from '@mui/icons-material/Info';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

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
    <Box sx={{ width: '100' }}>
      <Card
        variant="outlined"
        sx={{
          marginTop: 1,
          borderRadius: 1,
        }}
      >
        <React.Fragment>
          <CardContent>
            <Grid container display="flex" flexDirection="column">
              <Grid
                container
                item
                xs={12}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Grid xs={10}>
                  <Typography
                    sx={{ mb: 1.5, alignContent: 'left' }}
                    color={colorStatus}
                  >
                    <AssignmentLateIcon />
                    <b>Status:</b> {statusTask}
                  </Typography>
                </Grid>
                <Grid xs={1} display="flex">
                  <Tooltip title={props.info}>
                    <InfoIcon />
                  </Tooltip>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={8}>
                  <Typography
                    sx={{ fontSize: 16 }}
                    color="text.primary"
                    gutterBottom
                  >
                    {props.title}
                  </Typography>
                </Grid>
                <Grid xs={2}>Data: 11.03.2024</Grid>
                <Grid xs={2}>
                  <CardActions
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Button
                      onClick={() => handleButtonClick()}
                      size="medium"
                      variant="contained"
                      disabled={buttonText === 'Wykonano'}
                    >
                      {buttonText}
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Grid>

            {/* <Typography variant="body2">
              <b>Powód:</b> {props.reason}
            </Typography> */}
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
