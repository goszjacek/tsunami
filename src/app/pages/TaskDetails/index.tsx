import * as React from 'react';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

export function TaskDetails() {
  const params = useParams();

  return (
    <Grid>
      <span>Task Details for Task {params.id}</span>
    </Grid>
  );
}
