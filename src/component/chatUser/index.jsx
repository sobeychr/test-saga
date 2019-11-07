import React from 'react';

import 'Scss/component/chatUser';

import Avatar from './avatar';
import Input from './input';

const ChatUser = ({user}) => {
    return (
        <div className='chatuser'>
            <div className='username'>
                <Avatar id={user.avatar}/>
                <span>{user.name.display}</span>
            </div>
            <div className='message'>
                ttt
            </div>
            <Input />
        </div>
    );
};

export default ChatUser;
