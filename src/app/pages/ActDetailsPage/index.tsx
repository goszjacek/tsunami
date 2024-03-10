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
import {
  FormGroup,
  List,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  NativeSelect,
} from '@mui/material';
import Input from '@mui/material/Input';
import details from './actDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from 'app/components/Navbar';

const defaultTheme = createTheme();

export function ActDetails() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container>
        <CssBaseline />
        <Navbar />
        <Box
          sx={{
            marginTop: 5,
            marginRight: 5,
            marginLeft: 5,
            marginBottom: 10,
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
                        defaultValue={detail.obowiazek}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} md={12} sx={{ alignSelf: 'center' }}>
                      <TextField
                        sx={{ marginBottom: 2 }}
                        defaultValue={detail.termin}
                      />
                    </Grid>
                    <Grid container>
                      <Grid item xs={11} md={11} sx={{ alignSelf: 'center' }}>
                        <TextField
                          sx={{ marginBottom: 2 }}
                          defaultValue={detail.podstawa_prawna}
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
          <Typography variant="h4">
            Wyślij do użytkowników monitorujących
          </Typography>
          <FormControl fullWidth sx={{ marginBottom: 5, marginTop: 5 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Age
            </InputLabel>
            <NativeSelect
              defaultValue={1}
              inputProps={{
                name: 'Użytkownik monitorujący',
                id: 'uncontrolled-native',
              }}
            >
              <option value={1}>Internetowa sprzedaż detaliczna</option>
              <option value={2}>Dział HR</option>
              <option value={2}>Dział Biznesowy</option>
            </NativeSelect>
          </FormControl>
          <Button variant="contained">Wprowadź do systemu</Button>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
