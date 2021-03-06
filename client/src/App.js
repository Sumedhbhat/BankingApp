import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Transfer from "./components/Transfer";
import Customers from "./components/Customers";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/customers' exact>
            <Customers />
          </Route>
          <Route path='/customer/:id'>
            <Transfer />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
