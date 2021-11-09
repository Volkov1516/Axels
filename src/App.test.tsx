import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './components';

configure({adapter: new Adapter()})
 
describe("App", () => {

  it('My first test', () => {
    const appWrapper = shallow(<App />);
    const homeList = appWrapper.find(Home);
    expect(homeList).toHaveLength(1)
  })

});