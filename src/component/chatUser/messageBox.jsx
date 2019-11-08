import React from 'react';
import { useSelector } from 'react-redux';

import { getMessage } from 'Store/action/chat';

import MessageEntry from './messageEntry';

const MessageBox = ({user}) => {
    const message = useSelector(getMessage);

    return (
        <div className='message'>
            {message
                ? message.map((entry, key) => <MessageEntry
                        isCurrent={user.id === entry.user}
                        key={key}
                        message={entry}
                    />)
                : null}
        </div>
    );
};

export default MessageBox;
