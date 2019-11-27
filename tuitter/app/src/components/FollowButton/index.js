
import React from 'react';

import { follow } from '../../services/api'


const FollowButton = (props) => {

    const { data } = props;
    console.log(data)

    const followRequest = async(e) => {
        const idToFollow = e.target.getAttribute('idtofollow');
        const request = await follow(idToFollow);
    
        console.log(request)
    
    }

    return (
        <button type="Button" idtofollow={data.id} onClick={followRequest}>
            FOLLOW
        </button>
    )
}

export default FollowButton;