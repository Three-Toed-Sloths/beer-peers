import React, { Component } from 'react';
import API from '../../utils/userAPI';

import {Grid, Row, Col} from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import RecipeCard from '../../components/RecipeCard';
import ProfileCard from "../../components/ProfileCard";
import './Recipes.css';

class Recipes extends Component {
    state = {
        id: this.props.match.params.id,
        recipes: [],
        name:{},
        contact: {},
        img: ''
    }

    componentDidMount() {
        this.getRecipes(this.state.id);
    }

    getRecipes = id => {
        API.getUser(id)
        .then(res => {
            this.setState({
                name: res.data.name,
                contact: res.data.contact,
                img: res.data.image,
                recipes:res.data.recipes
            })
        })
    }

    render(){
        return (
            <div className='profileBackground'>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <ProfileCard 
                            userName={this.state.name.first +  " " + this.state.name.last}
                            location={this.state.contact.city + ", " + this.state.contact.state}
                            email={this.state.contact.email}
                            img={this.state.img}
                            recipes={this.state.recipes}
                            ></ProfileCard>
                        </Col>
                    </Row>
                    <Row>
                        <SecondaryNav  path='profile' iden={this.state.id}/>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.recipes.map(recipe => (
                                <RecipeCard
                                    key={`recipe${recipe._id}`}
                                    id={recipe._id}
                                    name={recipe.name}
                                    style={recipe.style}
                                    abv={recipe.specs.abv}
                                    batchSize={recipe.specs.batch.size}
                                    batchUnits={recipe.specs.batch.units}
                                    ibu={recipe.specs.ibu}
                                    fg={recipe.specs.fg}
                                    brewer={recipe.brewer.username}
                                    brewerFirstName={recipe.brewer.name.first}
                                    brewerLastName={recipe.brewer.name.last}
                                    description={recipe.description}
                                />
                            ))}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Recipes;