import * as React from 'react';
import { List, Grid, Button } from '@mui/material';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import tasks from 'app/components/Task/tasks';
import ComplaianceItem from 'app/components/ComplaianceItem';

export function HomePage() {
  const complaianceItems = [
    { title: 'CRBR', description: 'Wszytko ok', icon: 'ok' },
    { title: 'KRS', description: 'Wymagana akcja', icon: 'warning' },
    { title: 'RODO', icon: 'error' },
    { title: 'Ministerstwo środowiska', icon: 'ok' },
  ];

  return (
    <Grid>
      <CssBaseline />
      <Navbar></Navbar>
      <Grid container spacing={2} style={{ padding: 16, marginLeft: 10 }}>
        <Grid item xs={6} md={6}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
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
        <Grid item xs={6} md={6} spacing={2}>
          <Grid container spacing={2}>
            {complaianceItems.map((item, index) => (
              <ComplaianceItem
                title={item.title}
                icon={item.icon}
                key={index}
              />
            ))}
          </Grid>
          <Grid container>
            <Grid>
              <Button
                variant="contained"
                style={{
                  fontSize: 30,
                  backgroundColor: 'red',
                  borderRadius: 10,
                }}
                sx={{
                  position: 'fixed',
                  bottom: theme => theme.spacing(6),
                  right: theme => theme.spacing(2),
                }}
              >
                Zgłoś naruszenie
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
