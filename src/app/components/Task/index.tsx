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
import TaskModal from '../TaskModal';

export default function TaskComponent(props) {
  const [buttonText, setButtonText] = useState(props.action);
  const [statusTask, setStatusTask] = useState(props.status);
  const [colorStatus, setColorStatus] = useState(getColor());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTaskClick = () => {
    setIsModalOpen(true);
  };

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
          transition: 'box-shadow 0.3s, transform 0.3s',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow on hover
            transform: 'scale(1.01)',
          },
        }}
        onClick={() => handleTaskClick()}
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
                <Grid xs={2} display="flex" justifyContent="flex-end">
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
                justifyContent="space-between"
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
                <Grid xs={2}>Data: {props.date}</Grid>
                <Grid xs={2}>
                  <CardActions
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <Button
                      onClick={() => handleButtonClick()}
                      size="medium"
                      variant="contained"
                      disabled={buttonText === 'Wykonano'}
                      sx={{ minWidth: '120px' }}
                    >
                      {buttonText}
                    </Button>
                  </CardActions>
                </Grid>
              </Grid>
            </Grid>
            <Typography variant="body2">
              <b>Powód:</b> {props.reason}
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
      <TaskModal handleClose={() => setIsModalOpen(false)} open={isModalOpen} />
    </Box>
  );
}
