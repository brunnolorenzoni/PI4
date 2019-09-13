import React, {useState} from 'react';

import cloneDeep from 'lodash/cloneDeep';

import { InputText } from '../Inputs/InputText';
import { InputPassword } from '../Inputs/InputPassword';
import { InputSelect } from '../Inputs/InputSelect';

import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';

import validationForm from '../../utils/validationForm'
import registerUser from '../../services/register'
import { async } from 'q';

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

    const [formData, setFormData] = useState({
        email: null, 
        username: null, 
        password: null, 
        confirmPassword: null, 
        gender: '' 
    });

    const [controlError, setControlError] = useState({ 
        email: false,
        username: false,
        password: false, 
        confirmPassword: false,
        gender: false
    });

    const itemsGender = [
        {name: "Masculino", value:"M"}, 
        {name: "Feminino", value:"F"}
    ]

    const handleChange = (value, key) => {
        setFormData({...formData, [key]: value});
    };

    const facebookRegister = (event) =>{
        event.preventDefault();
        console.log("facebook login")
    }

    const dataIsValid = () =>
    {
        const newControlError = cloneDeep(controlError);
        
        newControlError.username            = !validationForm.checkUsername(formData.username); 
        newControlError.email               = !validationForm.checkEmail(formData.email);
        newControlError.password            = !validationForm.checkPassWord(formData.password);
        newControlError.confirmPassword     = !validationForm.confirmPassword(formData.password, formData.confirmPassword);
        newControlError.gender              = !validationForm.checkGender(formData.gender);

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
            var response = await registerUser.register(formData);
            
            console.log(response.response)

        }

    }

    return (
        <form id="login-form" className="form">
            <InputText 
                onChange={handleChange} 
                error={controlError.username}
                name_key="username"
                label="Username"
                autocomplete="username"
                helper="Digite um username"
            />
            <InputText 
                onChange={handleChange} 
                error={controlError.email}
                name_key="email"
                label="E-email"
                autocomplete="email"
                helper="Digite um e-mail"
            />
            <InputPassword 
                onChange={handleChange} 
                error={controlError.password}
                name_key="password"
                label="Senha"
                autocomplete="password"
                helper="Digite uma senha"
            />
            <InputPassword 
                onChange={handleChange} 
                error={controlError.confirmPassword}
                name_key="confirmPassword"
                label="Confirmar Senha"
                autocomplete="password"
                helper="Confirme sua senha"
            />
            <InputSelect 
                onChange={handleChange} 
                error={controlError.gender}
                name_key="gender"
                label="Gênero"
                autocomplete="gender"
                items={itemsGender}
                value={formData.gender}
                helper="Selecione um gênero"
            />

            <Button className={classes.socialLogin} color="primary" variant="contained" type="submit" onClick={facebookRegister}>
                <FacebookIcon/> Conectar com Facebook
            </Button>

            <Button className={classes.floatRight} color="primary" variant="contained" type="submit" onClick={handleSubmit}>Entrar</Button>
        </form>
    )
}

