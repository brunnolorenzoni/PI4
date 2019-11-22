import React from 'react';

import MultilineTextFields from './MultilineTextFields';

import { setTuitte } from '../../services/api'

import './index.scss'

const FormTuitte = () => {

  const submitForm = async (data) => {
    const saveRequest = await setTuitte(data);

    if(saveRequest.status === 200){
      window.location = '/'
    }

  }

  return (
    <form className="formWrapper" autoComplete="off">
      <MultilineTextFields submitForm={submitForm} />
    </form>
  )
}

export default FormTuitte;