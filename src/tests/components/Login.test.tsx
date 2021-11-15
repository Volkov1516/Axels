import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Login } from '../../components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

let wrapper: any;

describe('Login', () => {

  beforeAll(() => {
    wrapper = shallow(<Provider store={store} ><Login /></Provider>);
  });

  it('should take a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

