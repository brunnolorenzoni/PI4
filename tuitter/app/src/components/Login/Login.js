import React from 'react';
import Auth from '../../auth/index';
import { Redirect } from "react-router-dom";


import Container from '@material-ui/core/Container';
import { FormLogin } from "./FormLogin";


export const Login = (props) => {

    return (
        !Auth.isAuthenticated() ? (
            <Container maxWidth="sm">
                <h1>Faça Login</h1>
                <FormLogin></FormLogin>
            </Container>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )
}