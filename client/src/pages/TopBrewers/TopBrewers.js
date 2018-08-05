import React, {Component} from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import FollowingCard from "../../components/FollowingCard";
import API from "../../utils/userAPI";
import './TopBrewers.css';


class TopBrewers extends Component {

    state = {
        userArr: [],
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        API.getUsers()
         .then(res => {
            this.setState({
                userArr: res.data
            });
         })
         .catch(err => err);
    }


    render(){

        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2 className='brewerHeader'>Top Brewers</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {this.state.userArr.map((user, i) =>
                                <FollowingCard key={`brewerCard${i}`} user={user} />
                            )}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
};

export default TopBrewers;