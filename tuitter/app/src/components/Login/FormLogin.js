import React, {useState, useRef, useEffect} from 'react';

import { InputEmail } from './InputEmail';
import { InputPassword } from './InputPassword';

import Button from '@material-ui/core/Button';

export const FormLogin = () => {
    const [formData, setFormData] = useState({email: null, password: null});

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    const handleSubmit = event =>
    {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <form id="login-form" className="form">
            <InputEmail onChange={handleChange} />
            <InputPassword onChange={handleChange} />
            <Button color="primary">Criar Conta</Button>
            <Button color="primary" variant="contained" onClick={handleSubmit}>Entrar</Button>
        </form>
    )
}

