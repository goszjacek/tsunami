import * as React from 'react';
import { List, Grid, ListItem, IconButton, ListItemText } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Helmet } from 'react-helmet-async';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';

export function HomePage() {
  const taskNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid>
      <Navbar></Navbar>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {taskNo.map(value => (
          <TaskComponent></TaskComponent>
        ))}
      </List>
    </Grid>
  );
}
