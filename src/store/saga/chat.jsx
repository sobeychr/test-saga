import { call, put } from 'redux-saga/effects';

import {
    endMessage,
    endUser,
    fetchMessage,
    fetchUser,
} from 'Store/action/chat';

function* initChat() {
    try {
        yield put(fetchMessage);
        yield put(fetchUser);
    }
    catch(err) {
        console.error('[initChat]-try', err);
    }
}

function* fetchChatMessage() {
    try {
        const json = yield call(loadData, 'message');
        
        if(json) {
            yield put( endMessage(json) );
        }
    }
    catch(err) {
        console.error('[fetchChatMessage]-try', err);
    }
}

function* fetchChatUser() {
    try {
        const json = yield call(loadData, 'user');
        
        if(json) {
            yield put( endUser(json) );
        }
    }
    catch(err) {
        console.error('[fetchChatUser]-try', err);
    }
}

const loadData = async file => await fetch(`/data/chat-${file}.json`)
    .then(
        response => response.status === 200
            ? response.json()
            : false
    )
    .then(json => json)
    .catch(err => false);

export {
    initChat,
    fetchChatMessage,
    fetchChatUser,
};
