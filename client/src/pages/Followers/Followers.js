
import React, {Component} from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
import ProfileCard from "../../components/ProfileCard";
import './Followers.css';

class Followers extends Component {

    state = {
        id: this.props.match.params.id,
        followersArr: [],
        name:{},
        contact: {},
        img: ''
    }
    componentDidMount() {
        this.getUser(this.state.id);
    }


    getUser = id => {
        API.getUser(id)
         .then(res => {
            this.setState({
                name: res.data.name,
                contact: res.data.contact,
                img: res.data.image,
                followersArr: res.data.social.followers
            });
                console.log(res.data.social.followers);
         })
         .then(() => {console.log('got users followers')})
         .catch(err => console.log(err));
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
                            />
                        </Col>
                    </Row>
            
                    <Row>
                        <SecondaryNav path='profile' iden={this.state.id}/>
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
                </Grid>
            </div>
        )
    }
};

export default Followers;