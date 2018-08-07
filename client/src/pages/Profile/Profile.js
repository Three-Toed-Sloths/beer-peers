import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import ProfileRecipeCard from '../../components/ProfileRecipeCard';
import FollowingCard from '../../components/FollowingCard';
import SecondaryNav from '../../components/SecondaryNav';
import API from '../../utils/userAPI';
import './Profile.css';

class Profile extends Component {

    state = {
        path: 'profile',
        id: this.props.match.params.id,
        first: '',
        last: '',
        city: '',
        state: '',
        email: '',
        image: '',
        recipeArr: [],
        followAlert: '',
        followingArr: [],
        followersArr: [],
        showFollowAlert: false,
        currentComp: "pinnedRec",
        alertClass: ''
    }

    componentWillMount() {
        this.loadUser(this.state.id);
    }
    
    loadUser = id => {
        API.getUser(id)
            .then(res => {
                this.setState({
                    first: res.data.name.first,
                    last: res.data.name.last,
                    city: res.data.contact.city,
                    state: res.data.contact.state,
                    email: res.data.contact.email,
                    image: res.data.image,
                    recipeArr: res.data.recipes,
                    followingArr: res.data.social.following,
                    followersArrArr: res.data.social.followers
                });
            })
            .catch(err => err);
    }

    handleFollowClick = () => {
        const currentBrewerID = sessionStorage.getItem('userID');

        if(!currentBrewerID){
            this.setState({
                followAlert: `Please log in to follow ${this.state.first} ${this.state.last}`,
                showFollowAlert: true,
                alertClass: 'danger'
            })
        } else if(currentBrewerID === this.state.id){
            this.setState({
                followAlert: `Woah take it easy ${this.state.first}, no need to follow yourself`,
                showFollowAlert: true,
                alertClass: 'danger'
            })
        } else {
            this.handleAddFollow(this.state.id)
        }
    }

    handleComponentChange = comp => {
        this.setState({currentComp: comp});
    };

    renderComponent = () => {
        switch(this.state.currentComp){
            case "pinnedRec":
            return(
            this.state.recipeArr.map((recipe, i) =>
                <ProfileRecipeCard 
                    key={`recipe${i}`}
                    _id={recipe._id}
                    style={recipe.style}
                    name={recipe.name}
                />
            ));
            case "following":
            return(
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
            case "followers":
            return(
                <div>
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
                </div>
            )
            case "likes":
            return(
                <div>
                    
                </div>
            )
            case "recipes":
            //load recipes component
            return(
                <Col>
                    Recipes
                </Col>
            )
            default:
            //load pinned rec comp
            break;
        }
    };
    
    handleAddFollow = brewerToFollowID => {
        const currentBrewerID = sessionStorage.getItem('userID')
        // UPDATE THE CURRENT BREWER'S FOLLOWING LIST
        API.updateUser(currentBrewerID, {$addToSet: {'social.following': [brewerToFollowID]}})
        .then(res => {
            if(res.data.updated > 0){
                // UPDATE THE OTHER BREWER'S FOLLOWERS LIST
                API.updateUser(brewerToFollowID, {$addToSet: {'social.followers': [currentBrewerID]}})
                // .then(res => 'success')
                .then(res => {
                    this.setState({
                        followAlert: `Thanks for following ${this.state.first} ${this.state.last}!`,
                        showFollowAlert: true,
                        alertClass: 'success'
                    })
                })
                .catch(err => err);
            } else {
                this.setState({
                    followAlert: `You already follow ${this.state.first} ${this.state.last}`,
                    showFollowAlert: true,
                    alertClass: 'danger'
                })
            }
        })
        .catch(err => err);
    }


    closeFollowAlert = () => {
        this.setState({
            followAlert: '',
            showFollowAlert: false
        })
    }


    render(){
        return(
            <div className='profileBackground'>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <ProfileCard 
                            userName={this.state.first +  ' ' + this.state.last}
                            location={this.state.city + ', ' + this.state.state}
                            email={this.state.email}
                            img={this.state.image}
                            recipes={this.state.recipes}
                            handleClick={this.handleFollowClick}
                            followAlert={this.state.followAlert}
                            showFollowAlert={this.state.showFollowAlert}
                            closeFollowAlert={this.closeFollowAlert}
                            alertClass={this.state.alertClass}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <SecondaryNav
                            path={this.state.path}
                            iden={this.state.id}
                            currentComp={this.state.currentComp}
                            handleComponentChange={this.handleComponentChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {this.renderComponent()}
                    </Row>
                </Grid>
            </div>
        );
    }
}



export default Profile;