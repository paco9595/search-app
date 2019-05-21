
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Home, Search, Login, Vacante, Registro, Profile, Aplicaiones } from './contaniers';
import NavBarNavigation from './Components/navbar'
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
            <Route exact path="/vacante/:id" component={Vacante} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/aplicaiones" component={Aplicaiones} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);