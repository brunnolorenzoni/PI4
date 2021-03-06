import React, { useState } from 'react';

import './index.scss';

import Header from '../../components/Header';
import FormTuitte from '../../components/FormTuitte';
import ListTuittes from '../../components/ListTuittes';


const Home = (props) => {

    const [ hasUpdate, setHasUpdate ] = useState(false) 

    const emitUpdate = () => {
        setHasUpdate(true)
    }

    return (
        <>
            <Header/>
            <div className="bodyWrapper">
                <FormTuitte emitUpdate={emitUpdate} />
                <ListTuittes hasUpdate={hasUpdate} />
            </div>
        </>
    )
}

export default Home;