import * as React from 'react';
import { List, Grid, Button } from '@mui/material';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';
import CssBaseline from '@mui/material/CssBaseline';
import tasks from 'app/components/Task/tasks';
import violetions from 'app/components/Violetion/violetions';
import ComplaianceItem from 'app/components/ComplaianceItem';
import VioletionComponent from 'app/components/Violetion';

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
        <Grid item xs={4} md={4}>
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
        <Grid item xs={4} md={4}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {violetions.map(violetion => (
              <VioletionComponent
                id={violetion.id}
                title={violetion.title}
                reason={violetion.reason}
              ></VioletionComponent>
            ))}
          </List>
        </Grid>
        <Grid item xs={2} md={2} spacing={2}>
          <Grid container>
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
                  backgroundColor: '#FF8C00',
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
