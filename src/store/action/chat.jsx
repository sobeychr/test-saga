import {
    CHAT_INIT,
    CHAT_MESSAGE_END,
    CHAT_MESSAGE_START,
    CHAT_SEND,
    CHAT_TYPING_END,
    CHAT_TYPING_START,
    CHAT_USER_END,
    CHAT_USER_START,
} from 'Store/type';

const init = { type: CHAT_INIT };
const isLoading = state => state.chat.loadMessage || state.chat.loadUser;

const getMessage = state => state.chat.message;
const getUser = state => state.chat.user;

const messageEnd = json => ({
    type: CHAT_MESSAGE_END,
    payload: json,
});
const messageStart = { type: CHAT_MESSAGE_START };

const typingEnd = userId => ({
    type: CHAT_TYPING_END,
    payload: userId,
});
const typingStart = userId => ({
    type: CHAT_TYPING_START,
    payload: userId,
});

const userEnd = json => ({
    type: CHAT_USER_END,
    payload: json,
});
const userStart = { type: CHAT_USER_START };

export {
    init,
    isLoading,
    getMessage,
    getUser,
    messageEnd,
    messageStart,
    typingEnd,
    typingStart,
    userEnd,
    userStart,
};
