import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from '../auth/index'

import { Error } from '../pages/Error/Error'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'

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
            <Route exact path='/register' component={Register}/>
            <Route exact path='*' component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }