import React, {Component} from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ProfileCard from "../../components/ProfileCard";
import SecondaryNav from "../../components/SecondaryNav";
import PinnedRecipeCard from "../../components/PinnedRecipeCard";
import API from "../../utils/userAPI";
import "./Profile.css";

class Profile extends Component {

    state = {
        path: 'profile',
        identify: this.props.match.params.id,
        first: "",
        last: "",
        city: "",
        state: "",
        email: "",
        image: "",
        recipeArr: [],
        currentComp: "pinnedRec"
    }

    componentWillMount() {
        this.loadUser(this.state.identify);
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
                    // image: "https://i.ytimg.com/vi/I7jgu-8scIA/maxresdefault.jpg",
                    image: res.data.image,
                    recipeArr: res.data.recipes
                });
            })
            .then(() => {console.log('got user')})
            .catch(err => console.log(err));
    }

    //color change by type
    colorType = type => {
        let color = "";
        switch(type){
            case "American Lager":
            case "Cream Ale":
            case "German Pilsner":
            color = "#e9d76c";
            break;
            case "Belgian Golden Strong Ale":
            case "Blonde Ale":
            color = "#e1c336";
            break;
            case "Belgian Dubbel":
            case "Belgian Tripel":
            case "Belgian Witbier":
            case "Session IPA":
            case "Sour Ale":
            color = "#dab700";
            break;
            case "American Wheat Ale":
            case "California Common":
            case "Hefeweizen":
            case "Pale Ale":
            color = "#cfa200";
            break;
            case "English IPA":
            case "Fruit Beer":
            case "New England IPA":
            color = "#c38e0d";
            break;
            case "American IPA":
            case "Barley Wine":
            case "Belgian Saison":
            color = "#b87b1c";
            break;
            case "Double IPA":
            case "Oktoberfest":
            color = "#a86222";
            break;
            case "Amber Ale":
            case "Speciality Beer":
            color = "#94461c";
            break;
            case "Brown Ale":
            case "Scotch Ale":
            color = "#85341d";
            break;
            case "Barrel-Aged Beer":
            case "Brown Porter":
            color = "#74211a";
            break;
            case "Coffee Beer":
            case "Oatmeal Stout":
            color = "#601213";
            break;
            case "Irish Dry Stout":
            case "Milk Stout":
            case "Stout":
            color = "#4b0c11";
            break;
            case "American Imperial Stout":
            case "Black Ale":
            color = "#3c0c11";
            break;
            default:
            color = "#FFF";
            break;
        }
        return color;
    }

    handleComponentChange = comp => {
        this.setState({currentComp: comp});
    };

    renderComponent = () => {
        switch(this.state.currentComp){
            case "pinnedRec":
            //load pinned rec comp
            return(
            this.state.recipeArr.map((recipe, i) =>
                <PinnedRecipeCard 
                    key={`recipe${i}`}
                    recipeUrl={`/recipes/${recipe._id}`}
                    recipeColor={{background: this.colorType(recipe.style)}}
                    recipeName={recipe.name}
                    recipeStyle={recipe.style}
                />
            ));
            case "following":
            //load following component
            return(
                <Col>
                    THIS IS FOLLOWING
                </Col>
            )
            break;
            case "followers":
            //load followers component
            break;
            case "likes":
            //load likes component
            break;
            case "recipes":
            //load recipes component
            break;
            default:
            //load pinned rec comp
            break;
        }
    };
    
    render(){
        return(
            <div className="profileBackground">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <ProfileCard 
                            userName={this.state.first +  " " + this.state.last}
                            location={this.state.city+ ", " + this.state.state}
                            email={this.state.email}
                            img={this.state.image}
                            recipes={this.state.recipes}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <SecondaryNav
                            path={this.state.path}
                            iden={this.state.identify}
                            currentComp={this.state.currentComp}
                            handleComponentChange={this.handleComponentChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        {this.renderComponent()}
                    {/* {this.state.recipeArr.map((recipe, i) =>
                            <Col key={`recipe${i}`} className="recipeCardShort" sm={6} xs={12}>
                                <a href={`/recipes/${recipe._id}`}>
                                    <p style={{background: this.colorType(recipe.style)}}>
                                        {"Name: " + recipe.name}<br/>
                                        <hr className="profileHorizontal"/>
                                        {" Style: " + recipe.style}
                                    </p>
                                </a>
                            </Col>
                        )} */}
                    </Row>
                </Grid>
            </div>
        );
    }
}



export default Profile;