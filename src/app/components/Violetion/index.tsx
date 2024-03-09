import React from 'react';
import {
  Card,
  Grid,
  Button,
  Typography,
  Box,
  CardContent,
  CardActions,
} from '@mui/material';

export default function VioletionComponent(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Card
        variant="outlined"
        sx={{
          borderRadius: 1,
          marginTop: 1,
          borderColor: '#FF8C00',
          
        }}
      >
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
              {props.title}
            </Typography>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {props.reason}
            </Typography>
          </CardContent>
          <Grid container>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}>
              <CardActions style={{ display: 'flex', alignItems: 'right' }}>
                <Button size="small" variant="contained">
                  Zgłoś do PUODO
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </React.Fragment>
      </Card>
    </Box>
  );
}
