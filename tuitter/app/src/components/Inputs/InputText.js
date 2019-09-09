import React from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '20px'
    },
});

export const InputText = (props) => {
    const {onChange, error, name_key, label, autocomplete} = props;

    function handleChange(event)
    {
        onChange(event.target.value, name_key);
    }
    
    const classes = useStyles();

    return (
        <FormControl className={classes.root}>
            <TextField
                error={error}
                id={name_key}
                autoComplete={autocomplete}
                label={label}
                aria-describedby={label}
                variant="outlined"
                onChange={handleChange}
            />
            {error ? 
            <FormHelperText error={error}>Digite um e-mail</FormHelperText>
            : null}
        </FormControl>
    )
}