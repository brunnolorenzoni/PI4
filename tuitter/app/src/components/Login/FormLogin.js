import React, {useState} from 'react';
import { Link } from "react-router-dom";

import cloneDeep from 'lodash/cloneDeep';

import { InputText } from '../Inputs/InputText';
import { InputPassword } from '../Inputs/InputPassword';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import validationForm from '../../utils/validationForm'
import loginUser from '../../services/login'

import './FormLogin.scss'
import { async } from 'q';

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

    const [formData, setFormData] = useState({user: null, password: null});
    const [controlError, setControlError] = useState({user: false, password: false});

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    const dataIsValid = () =>
    {
        const newControlError = cloneDeep(controlError);
        
        newControlError.user        = !validationForm.checkUsername(formData.user);
        newControlError.password    = !validationForm.checkPassWord(formData.password);

        setControlError(newControlError);
        var errors = Object.values(newControlError);

        if(errors.indexOf(true) !== (-1)){
            return false
        }

        return true;

    }


    const handleSubmit = async (event) =>
    {
        event.preventDefault();

        if(dataIsValid())
        {
            var response = await loginUser.login(formData);

            if(response){
                console.log(response)
            }

        }
    }

    return (
        <form id="login-form" className="form">
            <InputText 
                onChange={handleChange} 
                error={controlError.user}
                name_key="user"
                label="E-email ou username"
                autocomplete="emailusername"
                helper="Digite seu e-mail ou username"
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

