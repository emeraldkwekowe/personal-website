import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import {Splash} from './splash.js'; 
import {Home} from './home.js';

class Emerald extends Component {
  render() {
    return (
      <HashRouter>
          <div className="content">
            <Route exact path="/" component={Splash}/>
            <Route path="/home" component={Home}/>
          </div>
      </HashRouter>
    );
  }
}
      

ReactDOM.render(<Emerald />, document.getElementById('root'));
