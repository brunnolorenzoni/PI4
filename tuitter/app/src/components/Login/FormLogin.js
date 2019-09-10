import React, {useState} from 'react';
import { Link } from "react-router-dom";

import cloneDeep from 'lodash/cloneDeep';

import { InputText } from '../Inputs/InputText';
import { InputPassword } from '../Inputs/InputPassword';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import validationForm from '../../utils/validationForm'

import './FormLogin.scss'

const useStyles = makeStyles({
    floatRight: {
        float: 'right'
    },
    floatLeft: {
        float: 'left'
    },
});

export const FormLogin = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({email: null, password: null});
    const [controlError, setControlError] = useState({email: false, password: false});

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    const dataIsValid = () =>
    {
        const newControlError = cloneDeep(controlError);
        
        newControlError.email       = !validationForm.checkEmail(formData.email);
        newControlError.password    = !validationForm.checkPassWord(formData.password);

        setControlError(newControlError);
        var errors = Object.values(newControlError);

        console.log(errors)

        if(errors.indexOf(true) !== (-1)){
            return false
        }

        return true;

    }


    const handleSubmit = event =>
    {
        event.preventDefault();
        event.stopPropagation();

        if(dataIsValid())
        {
            console.log(formData);

        }
    }

    return (
        <form id="login-form" className="form">
            <InputText 
                onChange={handleChange} 
                error={controlError.email}
                name_key="email"
                label="E-email"
                autocomplete="email"
                helper="Digite seu e-mail"
            />
            <InputPassword 
                onChange={handleChange} 
                error={controlError.password}
                name_key="password"
                label="Senha"
                autocomplete="password"
                helper="Digite sua senha"
            />
            <Link to="/register">
                <Button className={classes.floatLeft} color="primary">Criar Conta</Button>
            </Link>
            <Button className={classes.floatRight} color="primary" variant="contained" type="submit" onClick={handleSubmit}>Entrar</Button>
        </form>
    )
}

