import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './accounts/Dashboard';
import Login from './accounts/Login';
import Register from './accounts/Register';
import Home from './accounts/Home';

import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <nav
              className="navbar"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item" href="https://google.com">
                  <img
                    src="https://image.flaticon.com/icons/png/512/1243/1243420.png"
                    width="40"
                    height="40"
                  />
                  &nbsp; &nbsp; &nbsp;
                  <h1 className="has-text-weight-bold">KP-PRJ</h1>
                </a>

                <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item">Home</a>

                  <a className="navbar-item">Documentation</a>

                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">More</a>

                    <div className="navbar-dropdown">
                      <a className="navbar-item">About</a>
                      <a className="navbar-item">Jobs</a>
                      <a className="navbar-item">Contact</a>
                      <hr className="navbar-divider" />
                      <a className="navbar-item">Report an issue</a>
                    </div>
                  </div>
                </div>

                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <NavLink
                        activeClassName="active"
                        to="/register"
                        className="button is-primary"
                      >
                        Register
                      </NavLink>
                      <NavLink
                        activeClassName="active"
                        to="/login"
                        className="button is-light"
                      >
                        Login
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="content">
              <Switch>
                <Route exact path="/" component={Login} />
                <PublicRoute path="/login" component={Login} />
                <PublicRoute path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
