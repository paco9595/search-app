
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Home, Search } from './contaniers';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search/:word" component={Search}/>
            </Switch>
        </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);