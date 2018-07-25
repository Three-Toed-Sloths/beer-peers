import React from "react";
import {  Button } from 'react-bootstrap';
import './LikeBtn.css'

const LikeBtn = props => <Button onClick={props.addLike}>Like</Button>

export default LikeBtn;