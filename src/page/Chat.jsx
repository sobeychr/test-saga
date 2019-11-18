import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    init,
    isLoading as isChatLoading,
    hasLoaded as hasChatLoaded,
    getUser,
} from 'Store/action/chat';
import ChatUser from 'Component/chatUser';
import Loading from 'Component/loading';
import 'Scss/page/chat';

const Chat = () => {
    const isLoading = useSelector(isChatLoading);
    const hasLoaded = useSelector(hasChatLoaded);
    const users = useSelector(getUser);
    const dispatch = useDispatch();

    if (!hasLoaded) {
        dispatch(init);
    }

    return (
        <main className="chat">
            <Loading show={!hasLoaded || isLoading} />
            {hasLoaded && !isLoading && users
                ? users.map((user, key) => <ChatUser key={key} user={user} />)
                : null}
        </main>
    );
};

export default Chat;
