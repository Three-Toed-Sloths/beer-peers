import React, { Component } from 'react';
import API from '../../utils/userAPI';

import {Grid, Row, Col} from 'react-bootstrap';
import Wrapper from '../../components/Wrapper';
import SecondaryNav from '../../components/SecondaryNav';
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
                        <Col xs={12}>
                            {this.state.likes.map(like => (
                                <h1>{like.name}</h1>
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <SecondaryNav />
                    </Row>
                </Wrapper>
            </div>
        );
    }
}

export default Likes;