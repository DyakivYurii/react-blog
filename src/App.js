import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import PATH from './constans/path';

import AppLayer from './components/AppLayer';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Error404 from './components/Error404';

import SignIn from './containers/Auth/SignIn';
import SignUp from './containers/Auth/SignUp';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <AppLayer>
            <Switch>
              <Route path={PATH.ERROR_404} component={Error404} />
              <Route path={PATH.BLOG} component={Blog} />
              <Route path={PATH.CONTACT} component={Contact} />
              <Route path={PATH.SIGN_IN} component={SignIn} />
              <Route path={PATH.SIGN_UP} component={SignUp} />
              <Route path={PATH.HOME} exact component={Home} />

              <Redirect from="*" to={PATH.ERROR_404} />
            </Switch>
          </AppLayer>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
