import React from 'react';

import Avatar from './avatar';

const Header = ({ user }) => (
    <div className='header'>
        <Avatar user={user} />
        <span>{user.name.display}</span>
    </div>
);

export default Header;
