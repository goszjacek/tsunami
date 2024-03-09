import React from 'react';
import {
  Card,
  Button,
  Typography,
  Box,
  CardContent,
  CardActions,
} from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
        Task
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="green">
        To do
      </Typography>
      <Typography variant="body2">There is some short description</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained">
        Details
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function TaskComponent() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
