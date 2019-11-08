import React from 'react';

import Avatar from './avatar';

const Header = ({user}) => (
    <div className='header'>
        <Avatar id={user.avatar}/>
        <span>{user.name.display}</span>
    </div>
);

export default Header;
