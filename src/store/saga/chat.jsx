import { call, put } from 'redux-saga/effects';

import {
    messageEnd,
    messageStart,
    userEnd,
    userStart,
} from 'Store/action/chat';

function* initChat() {
    try {
        yield put(messageStart);
        yield put(userStart);
    }
    catch(err) {
        console.error('[initChat]-try', err);
    }
}

function* fetchMessage() {
    try {
        const json = yield call(loadData, 'message');
        
        if(json) {
            yield put( messageEnd(json) );
        }
    }
    catch(err) {
        console.error('[fetchMessage]-try', err);
    }
}

function* fetchUser() {
    try {
        const json = yield call(loadData, 'user');
        
        if(json) {
            yield put( userEnd(json) );
        }
    }
    catch(err) {
        console.error('[fetchUser]-try', err);
    }
}

const loadData = async file => await fetch(`/api/chat/${file}.json`)
    .then(
        response => response.status === 200
            ? response.json()
            : false
    )
    .then(json => json)
    .catch(err => false);

export {
    initChat,
    fetchMessage,
    fetchUser,
};
