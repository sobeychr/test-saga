import React from 'react';
import { useSelector } from 'react-redux';

import { getUser } from 'Store/action/chat';
import { getDateTime } from 'Util/date'

import Avatar from './avatar';

const generateTitle = (user, date) => user.name.display
        + ' - '
        + getDateTime(date);

const MessageEntry = ({isCurrent, message}) => {
    const { date: timestamp, message: text, user: userId } = message;
    const classes = ['entry', 'clearfix'];
    const users = useSelector(getUser);
    const user = users.find(entry => entry.id === userId);

    if(isCurrent) {
        classes.push('current');
    }

    return (
        <div className={classes.join(' ')}>
            <Avatar
                title={generateTitle(user, new Date(timestamp * 1000))}
                user={user}
            />
            <p className='text'>{text}</p>
        </div>
    );
};

export default MessageEntry;
