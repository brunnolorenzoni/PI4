import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from '../auth/index'

import { NotFound } from '../components/Error/NotFound'
import { Login } from '../components/Login/Login'

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        Auth.isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
    )} />
)

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <PrivateRoute exact path='/' component={() => <h1>Home</h1>}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }