import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';


import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '20px'
    },
});

export const InputSelect = (props) => {
    const {onChange, error, name_key, label, items, value, helper} = props;

    function handleChange(event)
    {
        onChange(event.target.value, name_key);
    }
    
    const classes = useStyles();

    return (
        <FormControl className={classes.root}>
            <InputLabel htmlFor={name_key}>{label}</InputLabel>
            <Select
                value={value}
                error={error}
                id={name_key}
                onChange={handleChange}
                aria-describedby={label}
                inputProps={{
                    name: 'gender',
                    id: name_key,
                  }}
            >
               {items.map((item, index) => {
                    return <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                })}
            </Select>
            {error ? 
            <FormHelperText error={error}>{helper}</FormHelperText>
            : null}
        </FormControl>
    )
}