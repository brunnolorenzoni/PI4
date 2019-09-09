import React, {useState, useEffect} from 'react';

import { InputText } from '../Inputs/InputText';
import { InputPassword } from '../Inputs/InputPassword';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
    const [controlError, setControlError] = useState({email_error: false, password_error: false});

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    function checkPassWord()
    {

        if(formData.password && formData.password !== '')
        {
            setControlError({...controlError, ['password_error']: false});
            return true;
        }

        setControlError({...controlError, ['password_error']: true});
        return false;

    }

    function checkEmail()
    {

        if(formData.email && formData.email !== ''){
            
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let test = regex.test(formData.email);
            
            if(test){
                setControlError({...controlError, ['email_error']: false});
            } else {
                setControlError({...controlError, ['email_error']: true});
            }
            
            return test;
            
        }
        
        setControlError({...controlError, ['email_error']: true});
        return false;        

    }

    function checkInputs()
    {

        if(!checkEmail()){
            return false;
        } 

        if(!checkPassWord()){
            return false;
        } 

        return true;
    }

    const handleSubmit = event =>
    {
        event.preventDefault();
        event.stopPropagation();

        if(checkInputs()){
            console.log(formData)
        }
    }

    return (
        <form id="login-form" className="form">
            <InputText 
                onChange={handleChange} 
                error={controlError.email_error}
                name_key="email"
                label="E-email"
                autocomplete="email"
            />
            <InputPassword 
                onChange={handleChange} 
                error={controlError.email_error}
                name_key="password"
                label="Senha"
                autocomplete="password"
            />
            <Link to="/register">
                <Button className={classes.floatLeft} color="primary">Criar Conta</Button>
            </Link>
            <Button className={classes.floatRight} color="primary" variant="contained" type="submit" onClick={handleSubmit}>Entrar</Button>
        </form>
    )
}

