import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen'
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';

function App() {
  const [sideTogge, setSideToggle] = useState(false)
  return (
    <Router>
     <Navbar click={() => setSideToggle(true)}/>
     <Sidedrawer show={sideTogge} click={() => setSideToggle(false)}/>
     <Backdrop show={sideTogge} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
 
    </Router>
    
  );
}

export default App;
