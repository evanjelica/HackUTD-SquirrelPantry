import logo from './logo.svg';
import './App.css';

import LandingPage from './front/Components/LandingPage';
import Navbar from './front/Components/Navbar';
import Assist from './front/Components/Assist'
import Footer from './front/Components/Footer';

import React from "react"
import {
  BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Container } from 'reactstrap'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Container>
          <Switch>

            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route path= "/assistance">
              <Assist/>
            </Route>

          </Switch>
        </Container>
        <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
