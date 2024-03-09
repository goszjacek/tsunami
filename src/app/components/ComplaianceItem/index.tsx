import React from 'react';
import { Card, Typography, Box, Grid } from '@mui/material';
import { WarningAmber, Check } from '@mui/icons-material';

const ComplianceItem = ({ title, icon }) => {
  const getIconComponent = () => {
    switch (icon) {
      case 'ok':
        return <Check color="success" fontSize="large" />;
      case 'warning':
      case 'error':
        return <WarningAmber color={icon} fontSize="large" />;
      default:
        return null;
    }
  };

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
            container
            justifyContent="center"
            alignItems="center"
            padding={4}
            spacing={2}
          >
            <Grid item>{getIconComponent()}</Grid>
            <Grid item>
              <Typography
                sx={{ fontSize: 24 }}
                color="text.primary"
                gutterBottom
              >
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Grid>
  );
};

export default ComplianceItem;
