import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Product from './components/Product/Product';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [products, setProducts] = useState([])
  const [reviews, setReviws] = useState([])

  useEffect(() => {
    axios.get('https://demo4176211.mockable.io/data')
    .then((resp) => {
      setProducts(resp.data.products)
      setReviws(resp.data.reviews)
    })
  }, [])

  const addReview = (productId, text, rate) => {
    const newReview= {
      "id": 1,
      productId,
      "userId": isAuth.id,
      "userName": isAuth.email,
      text,
      "rate": rate
    }
    setReviws([newReview, ...reviews])
  }

  return (
    <Router>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route path="/" exact >
            <Home products={products} />
          </Route>
          <Route path="/login" >
            <Login isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          {products && products.map((product, index) => <Route key={index} path={`/product/${product.id}`} >
            <Product product={product} reviews={reviews} addReview={addReview} isAuth={isAuth} />
          </Route>)}
        </Switch>
    </Router>
  );
}

export default App;
