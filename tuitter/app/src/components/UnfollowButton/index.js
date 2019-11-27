
import React from 'react';

import { unfollow } from '../../services/api'


const unFollowRequest = async(e) => {
    const idToUnfollow = e.target.getAttribute('idtounfollow');
    const request = await unfollow(idToUnfollow);

    console.log(request)

}

const UnfollowButton = (props) => {

    const { data } = props;
    console.log(data)

    return (
        <button type="Button" idtounfollow={data.id} onClick={unFollowRequest}>
            UN
        </button>
    )
}

export default UnfollowButton;