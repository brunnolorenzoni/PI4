import React, { useEffect } from 'react';

import './index.scss';

import UserResult from './UserResult'

const ResultSearch = (props) => {
    
    const { users, searchValue, hasFocus, statusCode } = props;

    useEffect(() => {
    },[users]);

    return (
        <>
            {
                hasFocus && users.length && statusCode === 200 ? 
                <div className="resultWrapper">
                    <ul className="listResult">
                        {
                            users.map(user => (
                                <UserResult key={user.id} data={user}/>
                            ))
                        }
                    </ul>
                </div>

                :

                null

            }

            {
                hasFocus && !users.length && searchValue !== '' && !statusCode ? 
                <div className="resultWrapper">
                    <span className="message">Buscando</span>
                </div>

                :

                null

            }

            {
                hasFocus && !users.length && statusCode === 204 ? 
                <div className="resultWrapper">
                    <span className="message">Não encontramos ninguém</span>
                </div>

                :

                null

            }
            
        </>
    )
}

export default ResultSearch;