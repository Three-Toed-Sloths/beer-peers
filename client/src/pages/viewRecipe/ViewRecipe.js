import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import "./ViewRecipe.css";


class ViewRecipe extends Component {
    state = {
        
    }  


    getRecipe = () => {
        API.getRecipe({
            
        })
    }





    render() {
        return(
            <div className="viewRecipe">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper><h1>Hello</h1></Paper>
              </Grid>
            </Grid>
          </div>
        )
    }
}



export default ViewRecipe;