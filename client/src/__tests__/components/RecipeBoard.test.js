import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBoard from './../../components/RecipeBoard';


describe('RecipeBoard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RecipeBoard/>, div);
    });
});