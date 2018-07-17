import React  from 'react';
import Typography from '@material-ui/core/Typography';




const Malt = props => (

    <div className="malt">
        <Typography component="p">
            {props.name} ({props.amount} {props.units})
        </Typography>
    </div>
)

export default Malt;