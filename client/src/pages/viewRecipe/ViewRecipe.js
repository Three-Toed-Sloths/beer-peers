import React, { Component } from 'react';
import FullRecipe from './../../components/FullRecipe';


import "./ViewRecipe.css";


class ViewRecipe extends Component {
    state = {
        id: this.props.match.params.id
    }  


        render() {

        return(
            <div className="viewAllRecipes">
                <FullRecipe id={this.state.id}/>
          </div>
        )
    }
}



export default ViewRecipe;