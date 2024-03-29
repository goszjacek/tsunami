import * as React from 'react';
import { List, Grid, Button } from '@mui/material';
import TaskComponent from 'app/components/Task';
import Navbar from 'app/components/Navbar';
import tasks from 'app/components/Task/tasks';
import violetions from 'app/components/Violetion/violetions';
// import ComplaianceItem from 'app/components/ComplaianceItem';
import VioletionComponent from 'app/components/Violetion';
import TaskAlertComponent from 'app/components/TaskAlert';
import { useState } from 'react';

export function HomePage() {
  // const complaianceItems = [
  //   { title: 'CRBR', description: 'Wszytko ok', icon: 'ok' },
  //   { title: 'KRS', description: 'Wymagana akcja', icon: 'warning' },
  //   { title: 'RODO', icon: 'error' },
  //   { title: 'Ministerstwo środowiska', icon: 'ok' },
  // ];
  const [hideNewTasks, setHideNewTasks] = useState(false);

  const handleAddTasks = () => {
    setHideNewTasks(true);
  };

  return (
    <Grid container>
      <Navbar />
      <Grid container spacing={2} style={{ padding: 32 }}>
        <Grid item xs={12} md={8}>
          <List
            sx={{
              width: '100%',
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TaskAlertComponent handleAddTasks={handleAddTasks} />
            {tasks.map(
              task =>
                (task.isVisible || hideNewTasks) && (
                  <TaskComponent
                    key={task.id}
                    id={task.id}
                    action={task.action}
                    status={task.status}
                    title={task.title}
                    info={task.info}
                    reason={task.reason}
                    date={task.date}
                  />
                ),
            )}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {violetions.map(violetion => (
              <VioletionComponent
                key={violetion.id}
                id={violetion.id}
                title={violetion.title}
                reason={violetion.reason}
              />
            ))}
            <Grid container justifyContent="flex-end" marginTop={2}>
              <Button
                variant="contained"
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  padding: 12,
                  backgroundColor: '#FF8C00',
                  borderRadius: 10,
                }}
              >
                Zgłoś naruszenie
              </Button>
            </Grid>
          </List>
        </Grid>
        {/* <Grid
          item
          container
          xs={12}
          md={2}
          spacing={2}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          marginTop={1}
        >
          {complaianceItems.map((item, index) => (
            <ComplaianceItem key={index} title={item.title} icon={item.icon} />
          ))}
         
        </Grid> */}
      </Grid>
    </Grid>
  );
}
