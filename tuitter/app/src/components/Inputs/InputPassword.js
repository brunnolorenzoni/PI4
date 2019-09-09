import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '20px'
    },
});

export const InputPassword = (props) => {
    const {onChange, error, name_key, label, autocomplete} = props;

    const [showPassword, setShowPassword] = useState(false);
    
    const handleChange = event => {
        onChange(event.target.value, name_key);
    };
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const classes = useStyles();
    
    return (
        <FormControl className={classes.root}>
            <TextField
                error={error}
                id={name_key}
                autoComplete={autocomplete}
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                label={label}
                aria-describedby={label}
                onChange={handleChange}
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        edge="end"
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                ),
                }}
            />
            {error ? 
            <FormHelperText error={error}>Digite uma senha</FormHelperText>
            : null}
        </FormControl>
    )
}