import React, { Component } from 'react';
import API from '../../utils/recipeAPI';


import { Col, Row } from 'react-bootstrap';

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
                <Row className="show-grid">
                    <Col item xs>
                        <h1>{recipe.name}</h1>
                        <h2>{recipe.style}</h2>
                        <h2>Total Likes: {recipe.likes}</h2>
                        <h2>Brewer: {recipe.brewer}</h2>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={4} md={4}>
                        <h3>Specs</h3>
                        <p>
                            Batch: {batch.size} {batch.units}<br />
                            ABV: {specs.abv}%<br />
                            IBUs: {specs.ibu}<br />
                            OG: {specs.og}<br />
                            FG: {specs.fg}<br />
                        </p>
                    </Col>
                    <Col xs={4} md={4}>

                        <h3>Ingredients</h3>
                        <h4>Base Malt</h4>
                        {this.state.base.map(malt => (
                            <Malt name={malt.name} amount={malt.amount} units={malt.units}/>
                        ))}

                        <h4>Speciality Malt</h4>
                        {this.state.speciality.map(malt => (
                            <Malt name={malt.name} amount={malt.amount} units={malt.units}/>
                        ))}

                        <h4>Hops</h4>
                        {this.state.hops.map(hop => (
                            <Hop name={hop.name} type={hop.type} alpha={hop.alpha} amount={hop.amount} units={hop.units} addition={hop.addition}/>
                        ))}
                        
                        <h4>Yeast</h4>
                        <div className="yeast">
                            <p>{this.state.yeast.name} ({this.state.yeast.amount})</p>
                        </div>
                    </Col>

                    <Col xs={4} md={4}>
                        <h3>Directions</h3>
                        <p>{recipe.directions}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}       




export default FullRecipe;