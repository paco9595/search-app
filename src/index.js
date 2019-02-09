
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Home } from './contaniers';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);