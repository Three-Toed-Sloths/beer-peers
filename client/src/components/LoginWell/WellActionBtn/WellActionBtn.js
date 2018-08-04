import React from "react";
import {  Button } from 'react-bootstrap';
import './WellActionBtn.css'

const WellActionBtn = props => <Button className={props.class} href={props.link}>{props.name}</Button>

export default WellActionBtn;