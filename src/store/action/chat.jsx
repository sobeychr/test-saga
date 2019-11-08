import {
    CHAT_END_MESSAGE,
    CHAT_END_TYPING,
    CHAT_END_USER,
    CHAT_INIT,
    CHAT_FETCH_MESSAGE,
    CHAT_FETCH_USER,
    CHAT_START_TYPING,
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
const endTyping = userId => ({
    type: CHAT_END_TYPING,
    payload: userId,
});
const endUser = json => ({
    type: CHAT_END_USER,
    payload: json,
});

const getMessage = state => state.chat.message;
const getUser = state => state.chat.user;

const isLoading = state => state.chat.loadMessage || state.chat.loadUser;

const startTyping = userId => ({
    type: CHAT_START_TYPING,
    payload: userId,
});

export {
    init,
    fetchMessage,
    fetchUser,

    endMessage,
    endTyping,
    endUser,
    
    getMessage,
    getUser,

    isLoading,

    startTyping,
};
