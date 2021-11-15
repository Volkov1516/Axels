import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Header } from '../../components/index';

import { store } from '../../redux/store';

configure({adapter: new Adapter()});

let wrapper: any;

describe('Header', () => {

  beforeAll( () => {
    wrapper = shallow(<Provider store={store} ><Header /></Provider>);
  });

  it('should take a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

