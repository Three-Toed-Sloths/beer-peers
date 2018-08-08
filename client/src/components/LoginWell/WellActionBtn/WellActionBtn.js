import React from "react";
import {  Button } from 'react-bootstrap';

const WellActionBtn = props => <Button className={props.class} href={props.link} bsSize='large' block>{props.name}</Button>

export default WellActionBtn;