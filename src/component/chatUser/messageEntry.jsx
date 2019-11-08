import React from 'react';
import { useSelector } from 'react-redux';

import { getUser } from 'Store/action/chat';

import Avatar from './avatar';

const MessageEntry = ({isCurrent, message}) => {
    const { date, message: text, user: userId } = message;
    const classes = ['entry', 'clearfix'];
    const users = useSelector(getUser);
    const user = users.find(entry => entry.id === userId);

    if(isCurrent) {
        classes.push('current');
    }

    return (
        <div className={classes.join(' ')}>
            <Avatar id={user.avatar}/>
            <p className='text'>{text}</p>
        </div>
    );
};

export default MessageEntry;
