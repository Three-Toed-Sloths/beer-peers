import React from 'react';
import {shallow} from 'enzyme';
import LandingPage from './../../pages/LandingPage';

// import LandingPage from './'

// test('User Login Fails when attempt with nonexisting credentials', () => {
//   // Render a checkbox with label in the document
//   const login = shallow(<LandingPage />);

//   const username = login.find('#loginUsername').text('hello');

//   expect(username).toEqual('hello')


// });

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('LandingPage', () => {

  it('fails when attempt with nonexisting credentials', () => {

    const login = shallow(<LandingPage />);

    // const loginState = false;
    // const username = login.find('#loginUsername').text();
  
    
    const loginBtn = login.find('#loginBtn');
    loginBtn.simulate('click', {
      preventDefault: () => {
      }
     });

    // const message = login.find('.failedLogin').text();
    const message = login.state().message

    expect(message).toEqual('Incorrect username or password')


  })

})