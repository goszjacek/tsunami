import React, { useState } from 'react';
import {
  Card,
  Grid,
  Button,
  Typography,
  Box,
  CardContent,
} from '@mui/material';
import { WarningAmber } from '@mui/icons-material';
import Modal from '../Modal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { todos, dsaDescription } from './data';

export default function TaskAlertComponent({ handleAddTasks }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 5,
          borderWidth: '2px',
          borderColor: 'red',
          // borderBlockWidth: 10,
          transition: 'box-shadow 0.3s, transform 0.3s',
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Shadow on hover
            transform: 'scale(1.01)',
          },
        }}
      >
        <React.Fragment>
          <CardContent>
            <Grid container>
              <Grid item xs={10}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <WarningAmber color="error" fontSize="large" />
                  <Typography marginLeft={2} color="error" fontWeight="bold">
                    Uwaga: Nowy Akt Prawny
                  </Typography>
                </Grid>
                <Typography variant="h6" sx={{ mb: 1.5, alignContent: 'left' }}>
                  Publikacja DSA
                </Typography>
                <Typography variant="body2" sx={{ mb: 1.5 }}>
                  Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2065
                  z dnia 19 października 2022 r. w sprawie jednolitego rynku
                  usług cyfrowych oraz zmiany dyrektywy 2000/31/WE (akt o
                  usługach cyfrowych)
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1.5, alignContent: 'left' }}
                >
                  <CalendarMonthIcon></CalendarMonthIcon>
                  Wejście w życie: 17.02.2024
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Grid
            container
            display="flex"
            justifyContent="space-between"
            padding={2}
          >
            <Grid item>
              <Button
                size="small"
                variant="contained"
                onClick={handleButtonClick}
                sx={{ minWidth: 150, height: 48 }}
              >
                Obowązki
              </Button>
            </Grid>
            <Grid item>
              <a
                href="https://sip.lex.pl/#/act/72067488/3358551?directHit=true&directHitQuery=dsa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ minWidth: 150, minHeight: 40 }}
                >
                  Treść aktu
                  <img
                    alt={'IPFG'}
                    src={'./WK.png'}
                    style={{ margin: 4, width: 32, height: 32 }}
                  />
                </Button>
              </a>
            </Grid>
          </Grid>
        </React.Fragment>
      </Card>
      <Modal
        open={isOpen}
        handleClose={() => setIsOpen(false)}
        todos={todos}
        description={dsaDescription}
        handleAddTasks={handleAddTasks}
      ></Modal>
    </Box>
  );
}
