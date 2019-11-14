import React from 'react';

const Avatar = ({user, title}) => (
    <div
        className={`avatar avatar_${user.id}`}
        title={title}
    />
);

export default Avatar;
