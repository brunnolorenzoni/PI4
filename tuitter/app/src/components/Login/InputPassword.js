import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export const InputPassword = (props) => {
    const {onChange} = props;
    
    const handleChange = event => {
        onChange(event.target.value, 'password');
    };
    
    const handleClickShowPassword = () => {
        //setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <FormControl>
            <TextField
                id="password"
                autoComplete="current-password"
                variant="outlined"
                // type={values.showPassword ? 'text' : 'password'}
                label="Senha"
                aria-describedby="Senha"
                // //value={values.password}
                onChange={handleChange}
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        //{values.showPassword ? <VisibilityOff /> : <Visibility />}
                    >
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />
            <FormHelperText>Digite uma senha</FormHelperText>
        </FormControl>
    )
}