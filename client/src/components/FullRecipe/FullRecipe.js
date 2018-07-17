import React, { Component } from 'react';
import API from '../../utils/recipeAPI';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Malt from './Malt';
import Hop from './Hop'

import './FullRecipe.css';


class FullRecipe extends Component {
    state = {
        id: "",
        recipe: {},
        specs: {},
        batch: {},
        base: [],
        speciality: [],
        hops: [],
        yeast: {}
    }   

    componentDidMount() {
        this.getRecipe(this.props.id);
    }

    getRecipe = id => {
        API.getRecipe(id)
         .then(res => {
            this.setState({
                id: res.data._id,
                recipe: res.data,
                specs: res.data.specs,
                batch: res.data.specs.batch,
                hops: res.data.ingredients.hops,
                yeast: res.data.ingredients.yeast,
                base: res.data.ingredients.malt.base,
                speciality: res.data.ingredients.malt.speciality
            })

            console.log(this.state.recipe)
            console.log(this.state.ingredients.malt.base[0])
         })
         .catch(err => console.log(err));
    }


    render() {
        const recipe = this.state.recipe;
        const specs = this.state.specs;
        const batch = this.state.batch;

        return (
            <div className="fullRecipe">
        <Grid container spacing={24}>
            <Grid item xs>
                <Typography variant="headline" component="h1">
                    {recipe.name}
                </Typography>
                <Typography variant="headline" component="h2">
                    {recipe.style}
                </Typography>
                <Typography variant="headline" component="h2">
                    Total Likes: {recipe.likes}
                </Typography>
                <Typography variant="headline" component="h2">
                    Brewer: {recipe.brewer}
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={24}>
            <Grid item xs={4} m={4}>
                <Typography variant="headline" component="h3">
                    Specs
                </Typography>
                <Typography component="p">
                    Batch: {batch.size} {batch.units}<br />
                    ABV: {specs.abv}%<br />
                    IBUs: {specs.ibu}<br />
                    OG: {specs.og}<br />
                    FG: {specs.fg}<br />
                </Typography>
            </Grid>
            <Grid item xs={4} m={4}>
                <Typography variant="headline">
                    Ingredients
                </Typography>
                <Typography variant="title" align="center">
                    Base Malt
                </Typography>
                {this.state.base.map(malt => (
                    <Malt name={malt.name} amount={malt.amount} units={malt.units}/>
                ))}
                <Typography variant="title" align="center">
                    Speciality Malt
                </Typography>
                {this.state.speciality.map(malt => (
                    <Malt name={malt.name} amount={malt.amount} units={malt.units}/>
                ))}
                <Typography variant="title" align="center">
                    Hops
                </Typography>
                {this.state.hops.map(hop => (
                    <Hop name={hop.name} type={hop.type} alpha={hop.alpha} amount={hop.amount} units={hop.units} addition={hop.addition}/>
                ))}
                <Typography variant="title" align="center">
                    Yeast
                </Typography>
                <Typography varient="body1">
                    {this.state.yeast.name} ({this.state.yeast.amount})
                </Typography>
            </Grid>
            <Grid item xs={4} m={4}>
                <Typography variant="headline">
                    Directions
                </Typography>
                <Typography component="p">
                    {recipe.directions}
                </Typography>
            </Grid>
        </Grid>
            </div>
        )
    }
}       




export default FullRecipe;