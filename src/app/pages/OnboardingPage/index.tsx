import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SettingsEthernet } from '@mui/icons-material';
import { FormGroup } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function OnboardingPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <SettingsEthernet />
          </Avatar>
          <Typography component="h1" variant="h5">
            Zaznacz systemy do integracji
          </Typography>
          <FormGroup onSubmit={() => console.log('test')} sx={{ mt: 4 }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Grid container alignItems="center">
                  <Grid item>
                    <img
                      alt={'KRS'}
                      src={'./KRS.png'}
                      style={{ margin: 16, width: 64, height: 48 }}
                    />
                  </Grid>
                  <Grid item>KRS</Grid>
                </Grid>
              }
            />
            <FormControlLabel
              style={{ marginTop: 16 }}
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Grid container alignItems="center">
                  <Grid item>
                    <img
                      alt={'CEIDG'}
                      src={'./CEIDG.png'}
                      style={{ margin: 16, width: 48, height: 48 }}
                    />
                  </Grid>
                  <Grid item>CEIDG</Grid>
                </Grid>
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Grid container alignItems="center">
                  <Grid item>
                    <img
                      alt={'CRBR'}
                      src={'./CRBR.png'}
                      style={{ margin: 16, width: 48, height: 48 }}
                    />
                  </Grid>
                  <Grid item>CRBR</Grid>
                </Grid>
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={
                <Grid container alignItems="center">
                  <Grid item>
                    <img
                      alt={'IPFG'}
                      src={'./WK.png'}
                      style={{ margin: 16, width: 48, height: 48 }}
                    />
                  </Grid>
                  <Grid item>IPG</Grid>
                </Grid>
              }
            />
            <Link to="/TaskList">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Dalej
              </Button>
            </Link>
            {/* <Grid container>
              <Grid item xs>
                <span>Forgot password?</span>
              </Grid>
              <Grid item>
                <span>{"Don't have an account? Sign Up"}</span>
              </Grid>
            </Grid> */}
          </FormGroup>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
