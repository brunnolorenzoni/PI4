
import React from 'react';

import { unfollow } from '../../services/api'

import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

const UnfollowButton = (props) => {

    const { data, emitUpdate } = props;

    const unFollowRequest = async(e) => {
        const idToUnfollow = e.currentTarget.getAttribute('idtounfollow');
        const request = await unfollow(idToUnfollow);
    
        emitUpdate();
    
    }

    return (
        <button type="Button" idtounfollow={data.id} onClick={unFollowRequest}>
            <PersonAddDisabledIcon />
        </button>
    )
}

export default UnfollowButton;