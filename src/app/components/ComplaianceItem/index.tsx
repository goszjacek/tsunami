import React from 'react';
import { Card, Typography, Box, CardContent, Grid } from '@mui/material';
import { DoneAll, WarningAmber } from '@mui/icons-material';

const ComplaianceItem = ({ title, icon }) => {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {title}
            </Typography>
            {icon === 'ok' && <DoneAll color="success" fontSize="medium" />}
            {icon === 'warning' && (
              <WarningAmber color="warning" fontSize="medium" />
            )}
            {icon === 'error' && (
              <WarningAmber color="error" fontSize="medium" />
            )}
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default ComplaianceItem;
