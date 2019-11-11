import React from 'react';
import { useSelector } from 'react-redux';

import {
    getTyping,
    getUser,
} from 'Store/action/chat';
import { getEntries } from 'Util/user';

const maxTyping = 2;

const generateTyping = (userList, typing) => {
    if(typing.length === 0) {
        return '';
    }
    else if(typing.length <= maxTyping) {
        const users = getEntries(userList, typing);
        const userNames = users.map(entry => entry.name.display);

        return userNames.length === 1
            ? `${userNames.join('')} is typing`
            : `${userNames.join(' and ')} are typing`;
    }

    return `${typing.length} users are typing`;
};

const Typing = ({user}) => {
    const userList = useSelector(getUser);
    const typing = useSelector(getTyping);
    const filtered = typing.filter(entry => entry !== user.id);
    const generated = generateTyping(userList, filtered);

    const classes = [
        'typing',
        typing.length === 0 && 'hidden',
    ];

    return (
        <div className={classes.join(' ')}>{generated}</div>
    );
};

export default Typing;
