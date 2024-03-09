import React from 'react';
import { Card, Typography, Box, CardContent, Grid } from '@mui/material';
import { DoneAll, WarningAmber, Check } from '@mui/icons-material';

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
          <Grid
            item
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding={4}
          >
            {icon === 'ok' && <Check color="success" fontSize="large" />}
            {icon === 'warning' && (
              <WarningAmber color="warning" fontSize="large" />
            )}
            {icon === 'error' && (
              <WarningAmber color="error" fontSize="large" />
            )}
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {title}
            </Typography>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default ComplaianceItem;
