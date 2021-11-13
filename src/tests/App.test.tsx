import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import App from '../App'

import { store } from '../redux/store';

configure({adapter: new Adapter()});

let wrapper: any;

describe('App', () => {

    beforeAll(() => {
        wrapper = shallow(<Provider store={store} ><App /></Provider>);
    });

    it('should take a snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

});

