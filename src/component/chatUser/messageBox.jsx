import React from 'react';
import { useSelector } from 'react-redux';

import {
    isLoading as isChatLoading,
    hasLoaded as hasChatLoaded,
    getMessage,
} from 'Store/action/chat';

import MessageEntry from './messageEntry';
import Typing from './typing';

let scrolled = false;

const MessageBox = ({user}) => {
    const isLoading = useSelector(isChatLoading);
    const hasLoaded = useSelector(hasChatLoaded);
    const message = useSelector(getMessage);

    const anchorRef = React.createRef();

    if(!scrolled && hasLoaded && !isLoading) {
        // small timeout to allow 'anchorRef' to be defined
        setTimeout(() => {
            anchorRef.current.scrollIntoView();
            scrolled = true;
        }, 25);
    }

    return (
        <div className='message'>
            {hasLoaded && !isLoading && message
                ? message.map((entry, key) => <MessageEntry
                        isCurrent={user.id === entry.user}
                        key={key}
                        message={entry}
                    />)
                : null}
            <Typing />
            <div className='anchor' ref={anchorRef}></div>
        </div>
    );
};

export default MessageBox;
