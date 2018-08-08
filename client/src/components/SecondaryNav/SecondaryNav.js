import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import './SecondaryNav.css';

const SecondaryNav = props => {

    //let current = `/${props.path}/${props.iden}/`;

    return (
        <Grid className='secondaryNav'>
            <Row className='secondaryNavRow'>
                <Col xsHidden>
                    <div className='nav-wrap' >
                        <a onClick={() => props.handleComponentChange('pinnedRec')}><p className='secondaryNavText'>Overview</p></a>
                        <a onClick={() => props.handleComponentChange('following')}><p className='secondaryNavText'>Following</p></a>
                        <a onClick={() => props.handleComponentChange('followers')}><p className='secondaryNavText'>Followers</p></a>
                        <a onClick={() => props.handleComponentChange('likes')}><p className='secondaryNavText'>Likes</p></a>
                        <a onClick={() => props.handleComponentChange('recipes')}><p className='secondaryNavText'>Recipes</p></a>
                    </div>
                </Col>
                {/* <Col xsHidden>
                    <div className='nav-wrap' >
                        <a href={current}><p className='secondaryNavText'>Overview</p></a>
                        <a href={current + 'following'}><p className='secondaryNavText'>Following</p></a>
                        <a href={current + 'followers'}><p className='secondaryNavText'>Followers</p></a>
                        <a href={current + 'likes'}><p className='secondaryNavText'>Likes</p></a>
                        <a href={current + 'recipes'}><p className='secondaryNavText'>Recipes</p></a>
                    </div>
                </Col> */}
                <Col smHidden mdHidden lgHidden>
                    <div>
                        <a onClick={() => props.handleComponentChange('pinnedRec')}><p className='secondaryNavText secondaryNavVert'>Overview</p></a>
                        <hr className='secondaryNavVertHR'/>
                        <a onClick={() => props.handleComponentChange('following')}><p className='secondaryNavText secondaryNavVert'>Following</p></a>
                        <hr className='secondaryNavVertHR'/>                        
                        <a onClick={() => props.handleComponentChange('followers')}><p className='secondaryNavText secondaryNavVert'>Followers</p></a>
                        <hr className='secondaryNavVertHR'/>                        
                        <a onClick={() => props.handleComponentChange('likes')}><p className='secondaryNavText secondaryNavVert'>Likes</p></a>
                        <hr className='secondaryNavVertHR'/>                        
                        <a onClick={() => props.handleComponentChange('recipes')}><p className='secondaryNavText secondaryNavVert'>Recipes</p></a>
                    </div>
                </Col>
            </Row>
        </Grid>
    )
}

export default SecondaryNav;


