import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  // const [isAuth, setIsAuth] = useState(true)
  // if(!isAuth) {
  //   return <Login setIsAuth={setIsAuth} />
  // }
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://demo4176211.mockable.io/a').then((resp) => setData(resp.data))
  }, [])

  console.log(data)

  const addData = () => {
    axios.post('https://demo4176211.mockable.io/a', {
      id: 2,
      text: "Another Text"
    }).then((resp) => setData([...data, resp.data]))
  }

  console.log(data)

  return (
    <Router>
        <Header />
        <button onClick={addData} >Add</button>
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
