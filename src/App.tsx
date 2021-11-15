import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Home, Product, Login } from './components/index';

import { useAppDispatch, useAppSelector } from './redux/hooks';

const App = () => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch({type: 'LOAD_DATA'});
  }, [dispatch])

  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          {products && products.map((product, index) => <Route key={index} path={`/product/${product.id}`} >
            <Product product={product} />
          </Route>)}
        </Switch>
    </Router>
  );
}

export default App;

