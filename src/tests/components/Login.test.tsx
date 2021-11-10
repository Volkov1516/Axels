import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Login } from '../../components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

const wrapper = <Provider store={store} ><Login /></Provider>;

describe('Login', () => {

  it('renders', () => {
    shallow(wrapper);
  });

  it('takes a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

