import React from 'react';
import {
  Card,
  Button,
  Typography,
  Box,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function TaskComponent({ id }) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              Task {id}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="green">
              To do
            </Typography>
            <Typography variant="body2">
              There is some short description
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={'/TaskDetails/' + id}>
              <Button size="small" variant="contained">
                Details
              </Button>
            </Link>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
