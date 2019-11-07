import React from 'react';

const Avatar = ({id}) => {
    const classes = [
        'avatar',
        `avatar_${id}`,
    ];
    return (
        <div className={classes.join(' ')}></div>
    );
};

export default Avatar;
