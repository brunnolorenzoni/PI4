import React, { useEffect, useState } from 'react';

import Tuitte from './Tuitte';

import { getTuitte } from '../../services/api'

import './index.scss';

const ListTuittes = (props) => {

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
        console.log(data)
    },[data]);

    return (
        <section className="listTuittes">
            {
                data.data.length ? 
                    data.data.map(tuitte => (
                        <Tuitte key={tuitte._id} username={data.user.username} text={tuitte.text} date={tuitte.date}/>
                    ))
                : null
            }
        </section>
    )
}

export default ListTuittes;