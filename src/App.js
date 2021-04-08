import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import { Button } from 'react-bootstrap';
import logo from './components/ImagesAndLogos/logo.jpg'
import ProductDetails from './components/Home/ProductDetails';
import Checkout from './components/Checkout/Checkout';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { useState } from 'react';
import Login from './components/Login/Login';
import Manage from './components/ManageProduct/Manage';
import AddProduct from './components/AddProduct/AddProduct';
import Order from './components/Order/Order';
import Review from './components/Checkout/Review';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const { isSignedIn, name } = loggedInUser;

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <ul className="ul">
            <li>
              <img style={{ width: "150px" }} src={logo} alt="" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Order</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
            {
              isSignedIn && <Link to="/login"><Button variant="primary">{name}</Button></Link>
            }
            {
              !isSignedIn && <Link to="/login"><Button variant="success">Login</Button></Link>
            }
          </ul>
          


          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/detail/:id">
              <ProductDetails />
            </Route>
            
            <Route path="/login">
              <Login />
            </Route>
            
            <PrivateRoute path="/review/:id">
              <Review />
            </PrivateRoute>
            
            <PrivateRoute path="/checkout/:id">
              <Checkout />
            </PrivateRoute>
            
            <PrivateRoute path="/orders">
              <Order />
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            
            <PrivateRoute path="/manage">
              <Manage />
            </PrivateRoute>

            <PrivateRoute path="/add">
              <AddProduct />
            </PrivateRoute>
          
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
