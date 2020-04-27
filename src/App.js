import React, { Component, Fragment} from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import Routes from './Routes'
import Footer from './Footer'

function App() {
  return (
    <Fragment>
    <BrowserRouter>
    <NavBar/>
    {/* <Main /> */}
    <Route path="/" component={Routes} />
    <Footer/>
    </BrowserRouter>
  </Fragment>
  );
}

export default App;
