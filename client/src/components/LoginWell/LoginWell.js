import React from "react";
import { Well } from 'react-bootstrap';
import WellActionBtn from './WellActionBtn';
import LoginForm from './LoginForm';
import './LoginWell.css';

const LoginWell = () => {

    if(sessionStorage.getItem('loggedIn')){
        return (
            <Well>
                <h2 className='loginTitle'>What's your next brew?</h2>
                <WellActionBtn class='landingBtn' link='/recipes' name='Top Recipes' />
                <WellActionBtn class='landingBtn' link='/brewers' name='Top Brewers' />
            </Well>
        )
    }

    return (
        <Well>
            <LoginForm />
        </Well>
    )
}

export default LoginWell;