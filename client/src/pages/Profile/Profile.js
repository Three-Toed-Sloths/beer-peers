import React, {Component} from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import ProfileCard from '../../components/ProfileCard';
import ProfileRecipeCard from '../../components/ProfileRecipeCard';
import FollowingCard from '../../components/FollowingCard';
import RecipeCard from '../../components/RecipeCard';
import SecondaryNav from '../../components/SecondaryNav';
import API from '../../utils/userAPI';
import AddRecipeButton from "../../components/AddRecipeButton/AddRecipeButton";
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
        username: '',
        recipeArr: [],
        followAlert: '',
        followingArr: [],
        followersArr: [],
        likes:[],
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
                    followersArrArr: res.data.social.followers,
                    likes: res.data.social.favorites,
                    username: res.data.username
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
                <Col xs={12}>
                    <h2 className='totalFollowingHeader'>
                        Total Following: {this.state.followingArr.length} Brewers
                    </h2>
                    {this.state.followingArr.map((user, i) =>
                        <FollowingCard key={`followingCard${i}`} user={user} />
                    )}
                </Col>
            );

            case "followers":
            return(
                <Col xs={12}>
                    <h2 className='totalFollowerHeader'>
                        Total Followers: {this.state.followersArr.length} Brewers
                    </h2>
                    {this.state.followersArr.map((user, i) =>
                        <FollowingCard key={`followerCard${i}`} user={user} />
                    )}
                </Col>
            );

            case "likes":
            return(
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
                            brewer={this.state.username}
                            brewerFirstName={this.state.first}
                            brewerLastName={this.state.last}
                            description={recipe.description}
                        />
                    ))}
                </Col>
            );

            case "recipes":
            return(
                <Col xs={12}>
                    {this.state.recipeArr.map(recipe => (
                        <RecipeCard
                            key={`recipe${recipe._id}`}
                            id={recipe._id}
                            name={recipe.name}
                            style={recipe.style}
                            abv={recipe.specs.abv}
                            batchSize={recipe.specs.batch.size}
                            batchUnits={recipe.specs.batch.units}
                            ibu={recipe.specs.ibu}
                            fg={recipe.specs.fg}
                            brewer={this.state.username}
                            brewerFirstName={this.state.first}
                            brewerLastName={this.state.last}
                            description={recipe.description}
                        />
                    ))}
                </Col>
            );
            
            default:
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
                        <AddRecipeButton
                            id={this.state.id}    
                        />
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