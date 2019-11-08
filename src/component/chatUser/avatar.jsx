import React from 'react';

const Avatar = ({user, title}) => {
    const classes = [
        'avatar',
        `avatar_${user.id}`,
    ];
    return (
        <div
            className={classes.join(' ')}
            title={title}
        />
    );
};

export default Avatar;
