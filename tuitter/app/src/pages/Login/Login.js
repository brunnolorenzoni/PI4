import React from 'react';
import Auth from '../../auth/index';
import { Redirect } from "react-router-dom";


import Card from '@material-ui/core/Card';

import { FormLogin } from "../../components/Login/FormLogin";
import './Login.scss';

export const Login = (props) => {

    return (
        !Auth.isAuthenticated() ? (
            <div className="wrapper">
                <Card className="card">
                    <h1 className="title">
                        Login
                    </h1>
                    <FormLogin></FormLogin>
                </Card>
            </div>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )
}