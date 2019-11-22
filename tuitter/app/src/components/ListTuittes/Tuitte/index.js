import React from 'react';
import AvatarUser from "../../AvatarUser";

import './index.scss'

const Tuitte = (props) => {
    
    const { image, username, text, date } = props;

    const MONTHS = [
        'jan',
        'fev',
        'mar',
        'abr',
        'mai',
        'jun',
        'jul',
        'ago',
        'set',
        'out',
        'nov',
        'dez'
    ]

    const formatDate = (d) => {

        const date = new Date(d);
        const dateFormated = date.getDate() + " de " + MONTHS[date.getMonth()] + " de " + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();

        return dateFormated;
    }

    return (
        <div className="tuitteWrapper">

            <div className="headerTuitte">
                <AvatarUser image={image} username={username}/>
                <h3 className="nicknameUser">@{username}</h3>
            </div>

            <div className="contentTuitte">
                <p>{text}</p>
            </div>

            <span className="dateTuitte">{formatDate(date)}</span>

        </div>
    )
}

export default Tuitte;