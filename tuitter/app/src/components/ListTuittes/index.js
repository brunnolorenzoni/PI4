import React, { useEffect, useState } from 'react';

import Tuitte from './Tuitte';

import { getTuitte } from '../../services/api'

import './index.scss';

const ListTuittes = (props) => {

    const { hasUpdate } = props;

    const [ data, setData ] = useState({
        data: [],
        user: {}
    });

    const requestTuittes = async () => {
        setData(await getTuitte());
    }

    useEffect(() => {
        requestTuittes()
    },[]);
    
    useEffect(() => {
        if(hasUpdate){
            requestTuittes()
        }
    },[hasUpdate]);

    useEffect(() => {
        console.log(data)
    },[data]);

    return (
        <section className="listTuittes">
            {
                data.data.length ? 
                    data.data.map(tuitte => (
                        <Tuitte key={tuitte._id} username={tuitte.user.username} text={tuitte.text} date={tuitte.date}/>
                    ))
                : null
            }
        </section>
    )
}

export default ListTuittes;