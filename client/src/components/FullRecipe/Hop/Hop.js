import React  from 'react';
import Typography from '@material-ui/core/Typography';



const Hop = props => (

    <div className="hop">
        <Typography varient="title" align="center">
            {props.name} {props.type} (aa: {props.alpha}%)
        </Typography>
        <Typography varient="body1">
            {props.amount} {props.units} at {props.addition} addition
        </Typography>
    </div>
)

export default Hop;