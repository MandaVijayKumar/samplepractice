
import React from 'react';
import {Grid, Paper, Container} from '@material-ui/core'


function Mytext() {
  return (
      
    <>
      <Grid container direction="row"
  justifyContent="center"
  alignItems="center" spacing = {5}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} align="center">Vijay kumar</Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={4}>
            Computer Science Department
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation = {4}>
            Rayalaseema University kurnool
          </Paper>
        </Grid>

      </Grid>
      <Container>
        <Grid container spacing={3}>
          <Grid container  item xs={6} >
            <Grid item xs={6}><Paper elevation={5}>kamesh</Paper></Grid>
            <Grid item xs={6}><Paper elevation={5}>Kaviya</Paper></Grid>
          </Grid>
          <Grid item xs><Paper elevation={5}>Konnali vaillage</Paper></Grid>
          
        </Grid>
      </Container>
    </>)
  
 
}

export default Mytext;
