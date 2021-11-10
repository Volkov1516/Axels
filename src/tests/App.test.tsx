import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import App from '../App';
import { Header, Home, Product, Login } from '../components';

import { store } from '../redux/store';

configure({adapter: new Adapter()});

const wrapper = <Provider store={store}> <App /> </Provider>;
const product = {
  id: 0,
  title: '',
  description: '',
  descriptionFull: '',
  img: ''
};

describe("App", () => {

  it('renders', () => {
    shallow(wrapper);
  });

  it('takes a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('checks a child components are available', () => {
    shallow(wrapper).find(<Header />);
    shallow(wrapper).find(<Home />);
    shallow(wrapper).find(<Product product={product}/>);
    shallow(wrapper).find(<Login />);
  })

});

