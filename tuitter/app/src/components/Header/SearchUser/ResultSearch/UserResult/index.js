import React from 'react';

import AvatarUser from '../../../../AvatarUser';
import UnfollowButton from '../../../../UnfollowButton';
import FollowButton from '../../../../FollowButton';
 

const UserResult = (props) => {

    const { data } = props;

    return (
        <li className="item">
            <div className="userInfoWrapper">
                <AvatarUser image={data.user.image} username={data.user.username}/>
                <h3 className="nicknameUser">@{data.user.username}</h3>
            </div>

            <div className="followUnfollowWrapper">
                {
                    data.isFollowing ? 
                        <UnfollowButton data={data} />
                    :
                        <FollowButton data={data} />
                }
            </div>
        
        </li>

    )
}

export default UserResult;