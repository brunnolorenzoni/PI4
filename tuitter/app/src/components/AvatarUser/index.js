import React from 'react';

const AvatarUser = (props) => {
    
    const { image, username } = props;

    const getLetters = (username) => {
        return username.substring(0, 2);
    }
    
    return (
        <>
            {image ? 
                <div className="avatarWrapper">
                    <img className="imageAvatar" src="image" /> 
                </div>
            : 
            <div className="avatarWrapper">
                <span className="letterAvatar">{getLetters(username)}</span>
            </div>
            }
        </>
    )
}

export default AvatarUser;