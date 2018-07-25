
import React, {Component} from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import SecondaryNav from '../../components/SecondaryNav';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
import ProfileCard from "../../components/ProfileCard";
import './Following.css';

class Following extends Component {

    state = {
        id: this.props.match.params.id,
        followingArr: [],
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
                followingArr: res.data.social.following
            });
                console.log(res.data.social.following);
         })
         .then(() => {console.log('got users following')})
         .catch(err => console.log(err));
    }


    render(){

        return (
            <div className="profileBackground">
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
                        <SecondaryNav path='profile' iden={this.state.id}/>
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
                </Grid>
            </div>
        )
    }
};

export default Following;