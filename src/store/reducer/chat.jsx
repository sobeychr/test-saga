import {
    CHAT_END_MESSAGE,
    CHAT_END_USER,
    CHAT_INIT,
    CHAT_FETCH_MESSAGE,
    CHAT_FETCH_USER,
} from 'Store/type';

const initialState = {
    loading: false,
    loadMessage: false,
    loadUser: false,
    user: false,
    message: false,
};

const chat = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === CHAT_FETCH_MESSAGE) {
        return {
            ...state,
            loadMessage: true,
            loading: true,
        };
    }
    else if(type === CHAT_FETCH_USER) {
        return {
            ...state,
            loadUser: true,
            loading: true,
        };
    }
    else if(type === CHAT_END_MESSAGE) {
        return {
            ...state,
            loadMessage: false,
            loading: state.loadUser,
            message: payload,
        };
    }
    else if(type === CHAT_END_USER) {
        return {
            ...state,
            loadUser: false,
            loading: state.loadMessage,
            user: payload,
        };
    }
    else {
        return state;
    }
};

export default chat;
