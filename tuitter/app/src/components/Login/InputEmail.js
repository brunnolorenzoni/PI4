import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export const InputEmail = (props) => {
    const {onChange} = props;

    function handleChange(event)
    {
        onChange(event.target.value, 'email');
    }

    return (
        <FormControl>
            <TextField
                id="email"
                autoComplete="username email"
                label="E-mail"
                aria-describedby="E-mail"
                variant="outlined"
                onChange={handleChange}
                error={false}
            />
            <FormHelperText>Digite um e-mail</FormHelperText>
        </FormControl>
    )
}