import React  from 'react';



const Malt = props => (

    <div className="malt">
        <p>
            {props.name} ({props.amount} {props.units})
        </p>
    </div>
)

export default Malt;