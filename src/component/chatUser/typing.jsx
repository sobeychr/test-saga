import React from 'react';
import { useSelector } from 'react-redux';

import {
    getTyping,
    getUser,
} from 'Store/action/chat';
import { getEntries } from 'Util/user';

const generateTyping = (userList, typing) => {
    if(typing.length === 0) return '';
    else if(typing.length > 2) return `${typing.length} users are typing`;
    else {
        const users = getEntries(userList, typing);
        const userNames = users.map(entry => entry.name.display);

        return userNames.length === 1
            ? `${userNames.join('')} is typing`
            : `${userNames.join(' and ')} are typing`;
    }
};

const Typing = ({user}) => {
    const userList = useSelector(getUser);
    const typing = useSelector(getTyping);
    const isTyping = typing.length > 0;
    const generated = generateTyping(userList, typing);

    return (
        <div className={`typing ${!isTyping && 'hidden'}`}>{generated}</div>
    );
};

export default Typing;
