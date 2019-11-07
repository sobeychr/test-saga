import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { init, getUser } from 'Store/action/chat';
import Loading from 'Component/loading';
import 'Scss/page/chat';

const Chat = () => {
    const users = useSelector(getUser);
    const dispatch = useDispatch();

    if(!users) {
        dispatch(init);
    }

    return (
        <main className='chat'>
            <Loading show={!users}/>
        </main>
    );
};

export default Chat;
