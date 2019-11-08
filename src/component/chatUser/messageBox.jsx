import React from 'react';
import { useSelector } from 'react-redux';

import { getMessage } from 'Store/action/chat';

import MessageEntry from './messageEntry';

const sortMessage = (messA, messB) => messA.date > messB.date;

const MessageBox = ({user}) => {
    const message = useSelector(getMessage);
    message.sort(sortMessage);

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
