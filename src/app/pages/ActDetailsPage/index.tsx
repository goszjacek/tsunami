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
import { FormGroup, List, Card, CardContent, TextField } from '@mui/material';
import Input from '@mui/material/Input';
import details from './actDetails';
import DeleteIcon from '@mui/icons-material/Delete';

const defaultTheme = createTheme();

export function ActDetails() {
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
          <Typography variant="h3">
            Obowiązki wynikające z rozporządzenia
          </Typography>
          <List
            sx={{
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {details.map(detail => (
              <Card sx={{ margin: 2, padding: 2 }}>
                <CardContent>
                  <Grid container>
                    <Grid item xs={12} md={12}>
                      <TextField
                        sx={{ width: '100%', marginBottom: 2 }}
                        placeholder={detail.obowiazek}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ alignSelf: 'center' }}>
                      <TextField
                        sx={{ marginBottom: 2 }}
                        placeholder={detail.termin}
                      />
                    </Grid>
                    <Grid container>
                      <Grid item xs={11} md={11} sx={{ alignSelf: 'center' }}>
                        <TextField
                          sx={{ marginBottom: 2 }}
                          placeholder={detail.podstawa_prawna}
                        />
                      </Grid>
                      <Grid item xs={1} md={1} sx={{ alignSelf: 'center' }}>
                        <DeleteIcon />
                      </Grid>
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
