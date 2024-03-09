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

const todos = [
  { id: 1, title: 'wyznaczenie punktu kontaktowego' },
  {
    id: 2,
    title:
      'wyznaczenie przedstawiciela (tylko, jeśli podmiot ma siedzibę poza UE)',
  },
  {
    id: 3,
    title: 'coroczna publikacja raportów dotyczących moderacji treści',
  },
  {
    id: 4,
    title: 'wprowadzenie systemu rozpatrywania skarg dot. nielegalnych treści',
  },
  {
    id: 5,
    title:
      'wprowadzenie mechanizmu pozwalającego na zawieszenie użytkowników regularnie publikujących nielegalne treści',
  },
  {
    id: 6,
    title: 'zapewnienie transparentności publikowanych reklam',
  },
  {
    id: 6,
    title:
      'przygotowanie się na współpracę z organami państwowymi w przedmiocie nielegalnych treści',
  },
];
const dsaDescription =
  'Umowa z Krajem-Gospodarzem między Rządem Rzeczypospolitej Polskiej, Europejską Komisją Gospodarczą Organizacji Narodów Zjednoczonych oraz Organizacją Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa w sprawie "Las2017" - Wspólnej Konferencji 39. Sesji Europejskiej Komisji do spraw Leśnictwa (EFC) Organizacji Narodów Zjednoczonych do spraw Wyżywienia i Rolnictwa (FAO) oraz 75. Sesji Komitetu do spraw Lasów i Przemysłu Drzewnego (COFFI) Europejskiej Komisji Gospodarczej Organizacji Narodów Zjednoczonych (UNECE), która odbędzie się w Warszawie w dniach 9-13 października 2017 roku. Warszawa.2017.10.05.';

export default function TaskAlertComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <Box sx={{ minWidth: 600 }} marginTop={2}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Grid container>
              <Grid item xs={10}>
                <Typography sx={{ mb: 1.5 }} color="error" fontWeight="bold">
                  Uwaga: Nowy Akt Prawny
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.5, alignContent: 'left' }}>
                  Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2022/2065
                  z dnia 19 października 2022 r. w sprawie jednolitego rynku
                  usług cyfrowych oraz zmiany dyrektywy 2000/31/WE (akt o
                  usługach cyfrowych)
                </Typography>
                <Typography variant="h6" sx={{ mb: 1.5, alignContent: 'left' }}>
                  Wejście w życie: 17.02.2024
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <WarningAmber color="error" fontSize="large" />
              </Grid>
            </Grid>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {props.title}
            </Typography>
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
                  sx={{ minWidth: 150, height: 48 }}
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
      ></Modal>
    </Box>
  );
}
