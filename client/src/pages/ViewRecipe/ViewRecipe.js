import React, { Component } from 'react';
import FullRecipe from './../../components/FullRecipe';
import Wrapper from './../../components/Wrapper';

import "./ViewRecipe.css";


class ViewRecipe extends Component {
    state = {
        id: this.props.match.params.id
    }  
        render() {
        return (
            <div className="viewRecipeBackground">
                <div className="viewRecipeOpacity">
                    <Wrapper>
                        <FullRecipe id={this.state.id}/>
                    </Wrapper>
                </div>
            </div>
        )
    }
}

export default ViewRecipe;