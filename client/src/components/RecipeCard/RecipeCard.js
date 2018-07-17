import React from 'react';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./RecipeCard.css";


const RecipeCard = props => (
            
    <Card className="recipeCard">
      <CardContent>
        <Grid container spacing={24}>
            <Grid item xs>
                <Typography variant="headline" component="h1">
                    {props.name}
                </Typography>
                <Typography variant="headline" component="h2">
                    {props.style}
                </Typography>
                <Typography variant="headline" component="h2">
                    Brewer: {props.brewer}
                </Typography>
            </Grid>
        </Grid>
        <Grid container spacing={24}>
            <Grid item xs={4} m={4}>
                <Typography variant="headline" component="h3">
                    Specs
                </Typography>
                <Typography component="p">
                    Batch: {props.batchSize} {props.batchUnits}<br />
                    ABV: {props.abv}%<br />
                    IBUs: {props.ibu}<br />
                    FG: {props.fg}<br />
                </Typography>
            </Grid>
            <Grid item xs={8} m={8}>
                <Typography component="p">
                            {props.description}
                </Typography>
            </Grid>
        </Grid>
      </CardContent>

      <CardActions>
        <Button component={Link} to="/" size="large">View Recipe</Button>
      </CardActions>
    </Card>
)

export default RecipeCard;