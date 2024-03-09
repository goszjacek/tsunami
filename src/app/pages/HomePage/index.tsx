import * as React from 'react';
import { List, Grid } from '@mui/material';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';

export function HomePage() {
  const taskNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid>
      <CssBaseline />
      <Navbar></Navbar>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {taskNo.map(value => (
          <TaskComponent id={value}></TaskComponent>
        ))}
      </List>
    </Grid>
  );
}
