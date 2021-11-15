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

let wrapper: any;

describe('Login', () => {

  beforeAll(() => {
    wrapper = shallow(<Provider store={store} ><Product product={product} ></Product></Provider>);
  });

  it('should take a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});

