
import React, {Component} from "react";
import { Col, Row, Grid } from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import Wrapper from '../../components/Wrapper';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
import './Following.css';


class Following extends Component {

    state = {
        id: this.props.match.params.id,
        followingArr: []
    }
    componentDidMount() {
        this.getUser(this.state.id);
    }


    getUser = id => {
        API.getUser(id)
         .then(res => {
            this.setState({
                followingArr: res.data.social.following
            });
                console.log(res.data.social.following);
         })
         .then(() => {console.log('got users following')})
         .catch(err => console.log(err));
    }


    render(){

        return (
            <div>
                <div className='followingCol'>
                    <div className='followingParallax'>
                        <div className='followingContainer'>
                            <h1 className='followingHeader'>Following</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <Wrapper>
                    <Row>
                        <SecondaryNav iden={this.state.id}/>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <h2 className='totalFollowingHeader'>
                                Total Following: {this.state.followingArr.length} Brewers
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.followingArr.map((user, i) =>
                                <FollowingCard key={`followingCard${i}`} user={user} />
                            )}
                        </Col>
                    </Row>
                </Wrapper>
            </div>
        )
    }
};

export default Following;