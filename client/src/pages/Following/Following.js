
import React, {Component} from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
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
            <div>
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
            </div>
        )
    }
};

export default Following;