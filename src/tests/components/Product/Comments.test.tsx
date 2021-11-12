import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Comments } from '../../../components/index'

import { store } from '../../../redux/store';

configure({adapter: new Adapter()});

const review = {
  id: 0,
  productId: 0,
  userId: 0,
  userName: '',
  text: '',
  rate: ''
};

const wrapper = <Provider store={store} ><Comments review={review} ></Comments></Provider>;

describe('Login', () => {

  it('should render', () => {
    shallow(wrapper);
  });

  it('should take a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

