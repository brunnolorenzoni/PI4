import React, { useEffect } from 'react';

import './index.scss';

const ResultSearch = (props) => {
    
    const { users, searchValue, hasFocus, statusCode } = props;

    useEffect(() => {
        console.log(users)
        console.log(statusCode)
    },[users]);

    return (
        <>
            {
                hasFocus && users.length && statusCode === 200 ? 
                <div className="resultWrapper">
                    <h1>Achamos</h1>
                </div>

                :

                null

            }

            {
                hasFocus && !users.length && searchValue !== '' && !statusCode ? 
                <div className="resultWrapper">
                    <h1>Buscando</h1>
                </div>

                :

                null

            }

            {
                hasFocus && !users.length && statusCode === 204 ? 
                <div className="resultWrapper">
                    <h1>Não encontramos ninguém</h1>
                </div>

                :

                null

            }
            
        </>
    )
}

export default ResultSearch;