import React, { Component } from 'react';
import FullRecipe from './../../components/FullRecipe';
import Wrapper from './../../components/Wrapper';

import "./ViewRecipe.css";


class ViewRecipe extends Component {
    state = {
        id: this.props.match.params.id
    }  


        render() {

        return(
            <Wrapper>
                <FullRecipe id={this.state.id}/>
            </Wrapper>
        )
    }
}



export default ViewRecipe;