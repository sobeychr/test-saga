import React from 'react';
import { useSelector } from 'react-redux';

import { getUser } from 'Store/action/chat';
import { getDateTime } from 'Util/date';
import { getEntry as getSingleUser } from 'Util/user';

import Avatar from './avatar';

const generateTitle = (user, date) => user.name.display
    + ' - '
    + getDateTime(date);

const MessageEntry = ({isCurrent, message}) => {
    const { date: timestamp, message: text, user: userId } = message;
    const classes = ['entry', 'clearfix'];
    const userList = useSelector(getUser);
    const user = getSingleUser(userList, userId);

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
