import React from 'react';
import { Card, Typography, Box, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { DoneAll, WarningAmber } from '@mui/icons-material';

const ComplaianceItem = ({ title, icon }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          minWidth: 275,
          borderRadius: 5,
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Card variant="outlined">
          <CardContent>
            {icon === 'ok' && <DoneAll color="success" fontSize="medium" />}
            {icon === 'warning' && (
              <WarningAmber color="warning" fontSize="medium" />
            )}
            {icon === 'error' && (
              <WarningAmber color="error" fontSize="medium" />
            )}
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ComplaianceItem;
