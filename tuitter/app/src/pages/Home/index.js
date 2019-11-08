import React from 'react';

import './index.scss';

import Header from '../../components/Header';
import FormTuitte from '../../components/FormTuitte';
import ListTuittes from '../../components/ListTuittes';


const Home = (props) => {

    return (
        <>
            <Header/>
            <FormTuitte />
            <ListTuittes />
        </>
    )
}

export default Home;