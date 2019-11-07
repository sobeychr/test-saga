import {
    CHAT_END_MESSAGE,
    CHAT_END_USER,
    CHAT_INIT,
    CHAT_FETCH_MESSAGE,
    CHAT_FETCH_USER,
} from 'Store/type';

const init = {
    type: CHAT_INIT,
};
const fetchMessage = {
    type: CHAT_FETCH_MESSAGE,
};
const fetchUser = {
    type: CHAT_FETCH_USER,
};

const endMessage = json => ({
    type: CHAT_END_MESSAGE,
    payload: json,
});
const endUser = json => ({
    type: CHAT_END_USER,
    payload: json,
});

const getMessage = state => state.chat.message;
const getUser = state => state.chat.user;

export {
    init,

    endMessage,
    endUser,
    fetchMessage,
    fetchUser,
    getMessage,
    getUser,
};
