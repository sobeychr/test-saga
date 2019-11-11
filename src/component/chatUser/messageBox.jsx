import React, { Component, PureComponent } from 'react';
import { useSelector } from 'react-redux';

import { getMessage } from 'Store/action/chat';

import MessageEntry from './messageEntry';

const MessageBox = ({user}) => {
    const message = useSelector(getMessage);
    const anchorRef = React.createRef();

    setTimeout(() => {
        anchorRef.current.scrollIntoView();
    }, 25);

    return (
        <div className='message'>
            {message
                ? message.map((entry, key) => <MessageEntry
                        isCurrent={user.id === entry.user}
                        key={key}
                        message={entry}
                    />)
                : null}
            <div className='anchor' ref={anchorRef}></div>
        </div>
    );
};

export default MessageBox;
