import React, {Component} from 'react';
import { Col } from 'react-bootstrap';
import './ProfileRecipeCard.css';

class ProfileRecipeCard extends Component {

    colorType = type => {
        let color = '';
        switch(type){
            case 'American Lager': case 'Cream Ale': case 'German Pilsner':
            color = '#e9d76c';
            break;
            case 'Belgian Golden Strong Ale': case 'Blonde Ale':
            color = '#e1c336';
            break;
            case 'Belgian Dubbel': case 'Belgian Tripel': case 'Belgian Witbier': case 'Session IPA': case 'Sour Ale':
            color = '#dab700';
            break;
            case 'American Wheat Ale': case 'California Common': case 'Hefeweizen': case 'Pale Ale':
            color = '#cfa200';
            break;
            case 'English IPA': case 'Fruit Beer': case 'New England IPA':
            color = '#c38e0d';
            break;
            case 'American IPA': case 'Barley Wine': case 'Belgian Saison':
            color = '#b87b1c';
            break;
            case 'Double IPA': case 'Oktoberfest':
            color = '#a86222';
            break;
            case 'Amber Ale': case 'Speciality Beer':
            color = '#94461c';
            break;
            case 'Brown Ale': case 'Scotch Ale':
            color = '#85341d';
            break;
            case 'Barrel-Aged Beer': case 'Brown Porter':
            color = '#74211a';
            break;
            case 'Coffee Beer': case 'Oatmeal Stout':
            color = '#601213';
            break;
            case 'Irish Dry Stout': case 'Milk Stout': case 'Stout':
            color = '#4b0c11';
            break;
            case 'American Imperial Stout': case 'Black Ale':
            color = '#3c0c11';
            break;
            default:
            color = '#FFF';
            break;
        }
        return color;
    }
    
    render(){
        return(
            <Col className='recipeCardShort' sm={6} xs={12}>
                <a href={`/recipes/${this.props._id}`}>
                    <div style={{background: this.colorType(this.props.style)}}>
                        <p>
                            {'Name: ' + this.props.name}<br/>
                        </p>
                        <hr className='profileHorizontal'/>
                        <p>
                            {' Style: ' + this.props.style}
                        </p>
                    </div>
                </a>
            </Col>
        );
    }
}

export default ProfileRecipeCard;