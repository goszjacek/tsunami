import React from 'react';
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
  let colorStatus;
  if (props.status === 'Nowe zadanie') {
    colorStatus = 'green';
  }
  if (props.status === 'W trakcie') {
    colorStatus = 'orange';
  }
  if (props.status === 'Wykonano') {
    colorStatus = 'gray';
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
                  Status: {props.status}
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
                <Link to={'/TaskDetails/' + props.id}>
                  <Button size="small" variant="contained">
                    {props.action}
                  </Button>
                </Link>
              </CardActions>
            </Grid>
          </Grid>
        </React.Fragment>
      </Card>
    </Box>
  );
}
