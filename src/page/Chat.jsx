import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    init,
    isLoading as isChatLoading,
    getUser,
} from 'Store/action/chat';
import ChatUser from 'Component/chatUser';
import Loading from 'Component/loading';
import 'Scss/page/chat';

const Chat = () => {
    const isLoading = useSelector(isChatLoading);
    const users = useSelector(getUser);
    const dispatch = useDispatch();

    if(isLoading) {
        dispatch(init);
    }

    return (
        <main className='chat'>
            <Loading show={isLoading}/>
            {!isLoading && users
                ? users.map((user, key) => <ChatUser key={key} user={user}/>)
                : null
            }
        </main>
    );
};

export default Chat;
