import React from 'react';
import { useDispatch } from 'react-redux';

import 'Scss/component/chatUser';

import Header from './header';
import Input from './input';
import MessageBox from './messageBox';
import Typing from './typing';

const isMale = user => user.gender === 0;

const ChatUser = ({ user }) => {
    const dispatch = useDispatch();

    return (
        <div
            className={`chatuser chatuser_${isMale(user) ? 'male' : 'female'}`}
        >
            <Header user={user} />
            <MessageBox user={user} />
            <Typing user={user} />
            <Input dispatch={dispatch} user={user} />
        </div>
    );
};

export default ChatUser;
