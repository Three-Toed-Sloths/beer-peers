import React from 'react';
import ReactDOM from 'react-dom';
import FullRecipe from './../../components/FullRecipe';


describe('FullRecipe', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FullRecipe id={'5b4a739c40fb8b56c79736c8'}/>, div);
    });

    describe('formatTime', () => {
        it('should format seconds', () => {
            const clock = shallow(<Clock/>);
            const seconds = 635;
            const expected = '10:35';
            const actual = clock.instance().formatTime(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when minutes or seconds are less than 10', () => {
            const clock = shallow(<Clock/>);
            const seconds = 65;
            const expected = '01:05';
            const actual = clock.instance().formatTime(seconds);

            expect(actual).toBe(expected);
        });
    });

});