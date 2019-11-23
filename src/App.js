import React, {Component} from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Index from './Components/Index/index.js';
import Contact from './Components/Contact/index.js';
import Navbar from './Components/Navbar/index.js';

class  App extends Component {
  render(){
      return (
        <BrowserRouter>
          <Navbar />
          
          <Route exact path='/' component={Index} />
          <Route path='/Contact' component={Contact} />
          
        </BrowserRouter>
      );
    }
  }

export default App;
