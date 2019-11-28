
import React from 'react';

import { follow } from '../../services/api'

import PersonAddIcon from '@material-ui/icons/PersonAdd';


const FollowButton = (props) => {

    const { data, emitUpdate } = props;
    console.log(data)

    const followRequest = async(e) => {
        const idToFollow = e.currentTarget.getAttribute('idtofollow');
        const request = await follow(idToFollow);
    
        emitUpdate()
    
    }

    return (
        <button type="Button" idtofollow={data.id} onClick={followRequest}>
            <PersonAddIcon />
        </button>
    )
}

export default FollowButton;