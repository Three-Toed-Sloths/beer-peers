import React from "react";
import { Grid, Col, Row } from 'react-bootstrap';
import "./SecondaryNav.css";

const SecondaryNav = props => {

    let current = `/profile/${props.iden}/`;
    return (
        <Grid className="secondaryNav">
            <Row className="secondaryNavRow">
                <Col xsHidden>
                    <div className='nav-wrap' >
                        <a href={current}><p className="secondaryNavText">Overview</p></a>
                        <a href={current + "following"}><p className="secondaryNavText">Following</p></a>
                        <a href={current + "followers"}><p className="secondaryNavText">Followers</p></a>
                        <a href={current + "likes"}><p className="secondaryNavText">Likes</p></a>
                        <a href={current + "recipes"}><p className="secondaryNavText">Recipes</p></a>
                    </div>
                </Col>
                <Col smHidden mdHidden lgHidden>
                    <div>
                        <a className='text-center' href={current}><p className="secondaryNavText">Overview</p></a>
                        <hr/>
                        <a className='text-center' href={current + "following"}><p className="secondaryNavText">Following</p></a>
                        <hr/>                        
                        <a className='text-center' href={current + "followers"}><p className="secondaryNavText">Followers</p></a>
                        <hr/>                        
                        <a className='text-center' href={current + "likes"}><p className="secondaryNavText">Likes</p></a>
                        <hr/>                        
                        <a className='text-center' href={current + "recipes"}><p className="secondaryNavText">Recipes</p></a>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default SecondaryNav;


