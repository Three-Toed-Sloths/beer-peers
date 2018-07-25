import React, { Component } from 'react';
import API from '../../utils/userAPI';

import {Grid, Row, Col} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import SecondaryNav from '../../components/SecondaryNav';
import RecipeCard from '../../components/RecipeCard';
import ProfileCard from "../../components/ProfileCard";
import './Likes.css';

class Likes extends Component {
    state = {
        id: this.props.match.params.id,
        likes: [],
        name:{},
        contact: {},
        img: ''
    }

    componentDidMount() {
        this.getLikes(this.state.id);
    }

    getLikes = id => {
        API.getUser(id)
        .then(res => {
            this.setState({
                name: res.data.name,
                contact: res.data.contact,
                img: res.data.image,
                likes:res.data.social.favorites
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
                        <SecondaryNav iden={this.state.id}/>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.likes.map(recipe => (
                                <RecipeCard
                                    key={`likedRecipe${recipe._id}`}
                                    id={recipe._id}
                                    name={recipe.name}
                                    style={recipe.style}
                                    abv={recipe.specs.abv}
                                    batchSize={recipe.specs.batch.size}
                                    batchUnits={recipe.specs.batch.units}
                                    ibu={recipe.specs.ibu}
                                    fg={recipe.specs.fg}
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

export default Likes;