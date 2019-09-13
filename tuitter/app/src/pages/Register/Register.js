import React from 'react';
import Auth from '../../services/auth';
import { Redirect } from "react-router-dom";

import Card from '@material-ui/core/Card';

import { FormRegister } from '../../components/Register/FormRegister'
import './Register.scss';


export const Register = (props) => {

    return (
        !Auth.isAuthenticated() ? (
            <div className="wrapper">
                <Card className="card">
                    <h1 className="title">
                        Registre-se
                    </h1>
                    <FormRegister/>
                </Card>
            </div>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )
}