import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Home } from '../../components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

let wrapper: any;

describe('Header', () => {

  beforeAll( () => {
    wrapper = shallow(<Provider store={store} ><Home /></Provider>);
  });

  it('should take a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

