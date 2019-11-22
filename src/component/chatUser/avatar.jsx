import React from 'react';

const Avatar = ({ user, title }) => (
    <div className={`avatar avatar_${user.avatar}`} title={title} />
);

export default Avatar;
