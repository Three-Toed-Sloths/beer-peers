import React, {Component} from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import ProfileCard from "../../components/ProfileCard";
import SecondaryNav from "../../components/SecondaryNav";
import API from "../../utils/userAPI";
import RecAPI from "../../utils/recipeAPI";

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
    
    loadUser = (id) => {
        API.getUser(id)
            .then(res => {
                this.setState({
                    first: res.data.name.first,
                    last: res.data.name.last,
                    city: res.data.contact.city,
                    state: res.data.contact.state,
                    email: res.data.contact.email,
                    image: res.data.image,
                    recipeIds: res.data.recipes
                });
                console.log(res.data);
            })
            .then(() => {this.loadRecipe(this.state.recipeIds[0]);})
            .catch(err => console.log(err));
    }

    loadRecipe = (recId) => {
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
    colorType = (type) => {
        let c = "";
        switch(type){
            case 'American IPA':
            c = "blue";
            break;
            case 'Stout':
            c = "green";
            break;
            case 'Amber Ale':
            c = "red";
            break;
            default:
            c = "pink";
            break;
        }
        return c;
    }
    
    
    render(){
        return(
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
                    <Col sm={6} xs={12} style={{background: this.colorType('Stout')}}><h3>{"Name: " + this.state.recipeStrNames + " Type: " + this.state.recipeTypes}</h3></Col>
                    <Col sm={6} xs={12} style={{background: this.colorType('Amber Ale')}}><h3>{"Name: " + this.state.recipeStrNames + " Type: " + this.state.recipeTypes}</h3></Col>
                    <Col sm={6} xs={12} style={{background: this.colorType('ASS JUICE')}}><h3>{"Name: " + this.state.recipeStrNames + " Type: " + this.state.recipeTypes}</h3></Col>
                    <Col sm={6} xs={12} style={{background: this.colorType(this.state.recipeTypes)}}><h3>{"Name: " + this.state.recipeStrNames + " Type: " + this.state.recipeTypes}</h3></Col>
                </Row>
                <Row>
                    <Col sm={12}>Recent Activity</Col>
                </Row>
            </Grid>
        );
    }
}



export default Profile;