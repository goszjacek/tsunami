import * as React from 'react';
import { List, Grid } from '@mui/material';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import tasks from 'app/components/Task/tasks';

export function HomePage() {
  return (
    <Grid>
      <CssBaseline />
      <Navbar></Navbar>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {tasks.map(task => (
          <TaskComponent
            id={task.id}
            action={task.action}
            status={task.status}
            title={task.title}
            info={task.info}
            reason={task.reason}
          ></TaskComponent>
        ))}
      </List>
    </Grid>
  );
}
