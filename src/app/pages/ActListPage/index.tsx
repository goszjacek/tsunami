import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormGroup, List, Card, CardContent } from '@mui/material';
import acts from './actList';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function ActList() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            marginRight: 5,
            marginLeft: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <List
            sx={{
              width: '95vw',
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {acts.map(act => (
              <Card sx={{ width: '100%', margin: 2, padding: 2 }}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={8} md={8}>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.primary"
                        gutterBottom
                      >
                        {act.description}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      md={2}
                      sx={{
                        alignSelf: 'center',
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 18, justifyItems: 'center' }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Data: {act.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} md={1} sx={{ alignSelf: 'center' }}>
                      <Button variant="contained">Otwórz LEX</Button>
                    </Grid>
                    <Grid item xs={1} md={1} sx={{ alignSelf: 'center' }}>
                      <Button variant="contained">Konwertuj</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
