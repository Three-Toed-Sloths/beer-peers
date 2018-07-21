import React from "react";
import {Grid, Col, Row} from 'react-bootstrap';
import "./SecondaryNav.css";

const SecondaryNav = props => (
<Grid className="secondaryNav">
    <Row className="secondaryNavRow">
        <Col className="secondaryCols" sm={3} xs={12}><a href={"/profile/" + props.iden}><h1 className="secondaryColText">Overview</h1></a></Col>
        <Col className="secondaryCols" sm={3} xs={12}><a href={"/following/" + props.iden}><h1 className="secondaryColText">Following</h1></a></Col>
        <Col className="secondaryCols" sm={3} xs={12}><a href={"/likes/" + props.iden}><h1 className="secondaryColText">Likes</h1></a></Col>
        <Col className="secondaryCols" sm={3} xs={12}><a href={"/recipes/" + props.iden}><h1 className="secondaryColText">Recipes</h1></a></Col>
    </Row>
</Grid>

);

export default SecondaryNav;

