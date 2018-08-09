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
                    followersArr: res.data.social.followers,
                    likes: res.data.social.favorites,
                    username: res.data.username
                });
            })
            .catch(err => err);
    }

    handleFollowClick = () => {
        const loggedIn = sessionStorage.getItem('loggedIn');
        const currentBrewerID = sessionStorage.getItem('userID');

        if(!loggedIn){
            const msg = `Please log in to follow ${this.state.first} ${this.state.last}`;
            this.showMsgWithClass(msg, 'danger')
        } else if(currentBrewerID === this.state.id){
            const msg = `Please don't follow yourself ${this.state.first}`;
            this.showMsgWithClass(msg, 'danger');
        } else {
            this.handleAddFollow(this.state.id)
        }
    }

    showMsgWithClass = (message, alertClass) => {
        this.setState({
            showFollowAlert: true,
            followAlert: message,
            alertClass: alertClass ? alertClass : 'danger'
        })
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
                    <h2 className='totalLikesHeader'>
                        Total Likes: {this.state.likes.length} Recipes
                    </h2>
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
                            brewer={recipe.brewer.username}
                            brewerFirstName={recipe.brewer.name.first}
                            brewerLastName={recipe.brewer.name.last}
                            description={recipe.description}
                        />
                    ))}
                </Col>
            );

            case "recipes":
            return(
                <Col xs={12}>
                    <h2 className='totalLikesHeader'>
                        Total Recipes: {this.state.recipeArr.length} Recipes
                    </h2>
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
                            brewer={recipe.brewer.username}
                            brewerFirstName={recipe.brewer.name.first}
                            brewerLastName={recipe.brewer.name.last}
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
                .then(res => {
                    const msg = `Thanks for following ${this.state.first} ${this.state.last}!`;
                    this.showMsgWithClass(msg, 'success');
                })
                .catch(err => err);
            } else {
                const msg = `You already follow ${this.state.first} ${this.state.last}`;
                this.showMsgWithClass(msg, 'danger');
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
                        <Col xs={12}>
                            <ProfileCard 
                            userName={this.state.first +  ' ' + this.state.last}
                            brewerID={this.state.id}
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
                        <Col xs={12}>
                            <SecondaryNav
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