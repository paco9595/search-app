
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Home, Search, Login } from './contaniers';
import { NavBarNavigation } from './Components/navbar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
library.add(fas)

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <NavBarNavigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:word" component={Search} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);