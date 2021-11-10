import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Home } from '../../components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

const wrapper = <Provider store={store} ><Home /></Provider>;

describe('Header', () => {

  it('renders', () => {
    shallow(wrapper);
  });

  it('takes a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

