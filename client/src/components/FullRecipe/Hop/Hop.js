import React  from 'react';


const Hop = props => (

    <div className="hop">
        <p>
            {props.name} {props.type} (aa: {props.alpha}%)
        </p>
        <p>
            {props.amount} {props.units} at {props.addition} addition
        </p>
    </div>
)

export default Hop;