import React, {Component} from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ProfileCard from "../../components/ProfileCard";
import SecondaryNav from "../../components/SecondaryNav";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/userAPI";
import RecAPI from "../../utils/recipeAPI";
import "./Profile.css";

class Profile extends Component {

    state = {
        identify: this.props.match.params.id,
        first: "",
        last: "",
        city: "",
        state: "",
        email: "",
        image:"",
        recipeIds:[],
        recipeStrNames:"",
        recipeTypes:""
    }

    componentWillMount() {
        this.loadUser(this.state.identify);
        console.log(this.state.identify);
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
                    image: "https://i.ytimg.com/vi/I7jgu-8scIA/maxresdefault.jpg",
                    // image: res.data.image ADD THIS TO DATABASE,
                    //recipes
                    recipeIds: res.data.recipes
                });
                console.log(res.data);
            })
            .then(() => {this.loadRecipe(this.state.recipeIds[0]);})
            .catch(err => console.log(err));
    }

    loadRecipe = recId => {
        RecAPI.getRecipe(recId)
            .then(res => {
                this.setState({
                    recipeStrNames: res.data.name,
                    recipeTypes: res.data.style
                });
            })
            .catch(err => console.log(err));
    }
    //color change by type
    colorType = type => {
        let color = "";
        switch(type){
            case "American IPA":
            color = "orange";
            break;
            case "Stout":
            color = "darkgreen";
            break;
            case "Amber Ale":
            color = "purple";
            break;
            default:
            color = "darkblue";
            break;
        }
        return color;
    }
    
    
    render(){
        return(
        <div className="profileBackground">
            <Wrapper>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <ProfileCard 
                            userName={this.state.first +  " " + this.state.last}
                            location={this.state.city+ ", " + this.state.state}
                            email={this.state.email}
                            img={this.state.image}
                            ></ProfileCard>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <SecondaryNav
                            iden={this.state.identify}
                            ></SecondaryNav>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="recipeCardShort" sm={6} xs={12}><p style={{background: this.colorType(this.state.recipeTypes)}}>{"Name: " + this.state.recipeStrNames}<br/>{" Type: " + this.state.recipeTypes}</p></Col>
                        <Col className="recipeCardShort" sm={6} xs={12}><p style={{background: this.colorType(this.state.recipeTypes)}}>{"Name: " + this.state.recipeStrNames}<br/>{" Type: " + this.state.recipeTypes}</p></Col>
                        <Col className="recipeCardShort" sm={6} xs={12}><p style={{background: this.colorType(this.state.recipeTypes)}}>{"Name: " + this.state.recipeStrNames}<br/>{" Type: " + this.state.recipeTypes}</p></Col>
                        <Col className="recipeCardShort" sm={6} xs={12}><p style={{background: this.colorType(this.state.recipeTypes)}}>{"Name: " + this.state.recipeStrNames}<br/>{" Type: " + this.state.recipeTypes}</p></Col>
                    </Row>
                    <Row>
                        <Col sm={12}>Recent Activity</Col>
                    </Row>
                </Grid>
            </Wrapper>
        </div>
        );
    }
}



export default Profile;