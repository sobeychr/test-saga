import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'Scss/component/chatUser';

import Header from './header';
import Input from './input';
import MessageBox from './messageBox';

const ChatUser = ({user}) => {
    const dispatch = useDispatch();

    return (
        <div className='chatuser'>
            <Header user={user}/>
            <MessageBox user={user}/>
            <Input dispatch={dispatch} user={user}/>
        </div>
    );
};

export default ChatUser;
