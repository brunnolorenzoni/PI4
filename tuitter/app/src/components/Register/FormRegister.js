import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { InputText } from '../Inputs/InputText';
import { InputPassword } from '../Inputs/InputPassword';
import { InputSelect } from '../Inputs/InputSelect';

import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    floatRight: {
        float: 'right'
    },
    floatLeft: {
        float: 'left'
    },
    socialLogin:{
        width: '80%',
        marginTop: '40px',
        marginBottom: '60px',
        marginLeft: "10%",
        marginRight: "10%",
    }
});

export const FormRegister = () => {

    const classes = useStyles();

    const [formData, setFormData] = useState({email: null, username: null, password: null, confirm_password: null, gender: ''});
    const [controlError, setControlError] = useState({email_error: false, password_error: false});
    
    const itemsGender = [
        {name: "Masculino", value:"M"}, 
        {name: "Feminino", value:"F"}
    ]

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    const facebookRegister = event =>{
        event.preventDefault();
        event.stopPropagation();

        console.log(formData)
    }

    const handleSubmit = event =>
    {
        event.preventDefault();
        event.stopPropagation();

        console.log(formData)
    }

    return (
        <form id="login-form" className="form">
            <InputText 
                onChange={handleChange} 
                error={controlError.email_error}
                name_key="username"
                label="Username"
                autocomplete="username"
            />
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
            <InputPassword 
                onChange={handleChange} 
                error={controlError.email_error}
                name_key="confirm_password"
                label="Confirmar Senha"
                autocomplete="password"
            />
            <InputSelect 
                onChange={handleChange} 
                error={controlError.email_error}
                name_key="gender"
                label="Gênero"
                autocomplete="gender"
                items={itemsGender}
                value={formData.gender}
            />

            <Button className={classes.socialLogin} color="primary" variant="contained" type="submit" onClick={facebookRegister}>
                <FacebookIcon/> Conectar com Facebook
            </Button>

            <Button className={classes.floatRight} color="primary" variant="contained" type="submit" onClick={handleSubmit}>Entrar</Button>
        </form>
    )
}

