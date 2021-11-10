import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import { Product, Comments } from '../../../components/index';

import { store } from '../../../redux/store';

configure({adapter: new Adapter()});

const product = {
  id: 0,
  title: '',
  description: '',
  descriptionFull: '',
  img: ''
};

const review = {
  id: 0,
  productId: 0,
  userId: 0,
  userName: '',
  text: '',
  rate: ''
};

const wrapper = <Provider store={store} ><Product product={product} ></Product></Provider>;

describe('Login', () => {

  it('renders', () => {
    shallow(wrapper);
  });

  it('takes a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('checks a child components are available', () => {
    shallow(wrapper).find(<Comments review={review} />);
  });

});

