import React, { Component } from 'react';
import API from '../../utils/userAPI';

import {Grid, Row, Col} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import SecondaryNav from '../../components/SecondaryNav';
import RecipeCard from '../../components/RecipeCard';
import './Likes.css';

class Likes extends Component {
    state = {
        id: this.props.match.params.id,
        likes: []
    }

    componentDidMount() {
        this.getLikes(this.state.id);
    }

    getLikes = id => {
        API.getUser(id)
        .then(res => {
            this.setState({
                likes:res.data.social.favorites
            })
            console.log(this.state.likes[0].name + ' likes')
        })
    }

    render(){
        return (
            <div>
                <div className='likesCol'>
                    <div className='likesParallax'>
                        <div className='likesContainer'>
                            <h1 className='likesHeader'>Likes</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div>
                    <Grid />
                </div>
                <Wrapper>
                    <Row>
                        <SecondaryNav iden={this.state.id}/>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.likes.map(recipe => (
                                <RecipeCard
                                id={recipe._id}
                                    name={recipe.name}
                                    style={recipe.style}
                                    abv={recipe.specs.abv}
                                    batchSize={recipe.specs.batch.size}
                                    batchUnits={recipe.specs.batch.units}
                                    ibu={recipe.specs.ibu}
                                    fg={recipe.specs.fg}
                                    // brewer={recipe.brewer.username}
                                    // brewerFirstName={recipe.brewer.name.first}
                                    // brewerLastName={recipe.brewer.name.last}
                                    description={recipe.description}
                                />
                            ))}
                        </Col>
                    </Row>
                </Wrapper>
            </div>
        );
    }
}

export default Likes;