import React from 'react';
import { Button } from 'react-bootstrap';

import './FollowBtn.css';

const FollowBtn =  props => {

    if(props.brewer === sessionStorage.getItem('userID')){
        return ''
    }

    return <Button bsStyle='success' bsSize='large' onClick={props.onClick}>Follow</Button>
};


export default FollowBtn;