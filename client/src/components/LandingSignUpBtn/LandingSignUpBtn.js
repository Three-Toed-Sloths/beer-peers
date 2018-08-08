import React from "react";
import { Button } from 'react-bootstrap/lib';


const LandingSignUpBtn = () => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    
    if(loggedIn){
        return (
            <Button className='landingBtn' bsSize='large' block href='/recipes'>Top Recipes</Button>
        )
    }

    return <Button className='landingBtn' bsSize='large' block href='/register'>Sign Up</Button>;

}

export default LandingSignUpBtn;