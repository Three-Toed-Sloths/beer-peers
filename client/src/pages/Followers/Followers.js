
import React, {Component} from "react";
import { Col, Row } from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import Wrapper from '../../components/Wrapper';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
import './Followers.css';


class Followers extends Component {

    state = {
        id: this.props.match.params.id,
        followersArr: []
    }
    componentDidMount() {
        this.getUser(this.state.id);
    }


    getUser = id => {
        API.getUser(id)
         .then(res => {
            this.setState({
                followersArr: res.data.social.followers
            });
                console.log(res.data.social.followers);
         })
         .then(() => {console.log('got users followers')})
         .catch(err => console.log(err));
    }


    render(){

        return (
            <div>
                <div className='followerCol'>
                    <div className='followerParallax'>
                        <div className='followerContainer'>
                            <h1 className='followerHeader'>Followers</h1>
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
                            <h2 className='totalFollowerHeader'>
                                Total Followers: {this.state.followersArr.length} Brewers
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.followersArr.map((user, i) =>
                                <FollowingCard key={`followerCard${i}`} user={user} />
                            )}
                        </Col>
                    </Row>
                </Wrapper>
            </div>
        )
    }
};

export default Followers;