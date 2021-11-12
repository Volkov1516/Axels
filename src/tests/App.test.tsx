import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';

import App from '../App';
import { Header, Home, Product, Login } from '../components';

import { store } from '../redux/store';

configure({adapter: new Adapter()});

let wrapper: JSX.Element;
let product: {
  id: number,
  title: string,
  description: string,
  descriptionFull: string,
  img: string
};

describe("App", () => {

  beforeEach(() => {
    wrapper = <Provider store={store}> <App /> </Provider>;
    product = {
      id: 0,
      title: '',
      description: '',
      descriptionFull: '',
      img: ''
    };
  })

  it('should render', () => {
    shallow(wrapper);
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check a child components are available', () => {
    shallow(wrapper).find(<Header />);
    shallow(wrapper).find(<Home />);
    shallow(wrapper).find(<Product product={product}/>);
    shallow(wrapper).find(<Login />);
  })

});

