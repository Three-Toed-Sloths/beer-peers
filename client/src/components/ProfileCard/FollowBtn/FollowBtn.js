import React from 'react';
import { Button } from 'react-bootstrap';

import './FollowBtn.css';

const FollowBtn =  props => {

    if(props.brewer === sessionStorage.getItem('userID')){
        return ''
    }

    return <Button className='profileFollow' bsStyle='warning' bsSize='large' onClick={props.onClick} block>Follow</Button>
};


export default FollowBtn;