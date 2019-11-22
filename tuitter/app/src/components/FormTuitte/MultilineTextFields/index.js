import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';


const MultilineTextFields = (props) => {

  const { submitForm } = props;

  const [tuitteText, setTuitteText] = useState('');

  const handleChange = (event) => {
    setTuitteText(event.target.value);
  };

  const verificarInput = (event) => {
    if(tuitteText && tuitteText.length > 0){
      submitForm(tuitteText);
    }
  };


  return (
    <>
      <div className="fieldContainer">
        <TextField
          id="outlined-multiline-static"
          multiline
          rows="4"
          className="input-tuitte"
          margin="normal"
          variant="outlined"
          placeholder="No que você está pensando?"
          onChange={handleChange}
        />
      </div>


      <Button variant="contained" color="primary" onClick={verificarInput} className="button-submit">
        Tuittar
      </Button>
    </>
  );
}

export default MultilineTextFields;