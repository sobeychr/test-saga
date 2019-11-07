import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import { navigate as navigatePage } from 'Store/action/page';
import {
    INIT_APP,
    CHAT_INIT,
    CHAT_FETCH_MESSAGE,
    CHAT_FETCH_USER,
    PAGE_FETCH,
} from 'Store/type';
import pages from 'Data/pages';

import {
    initChat,
    fetchChatMessage,
    fetchChatUser,
} from './chat';
import { fetchPage } from './page';

const firstPage = get(pages, '0.page');

function* initAppState() {
    try {
        yield put(navigatePage(firstPage));
    }
    catch(err) {
        console.error('[initAppState]-try', err);
    }
}

function* saga() {
    try {
        yield takeLatest(INIT_APP, initAppState);
        yield takeLatest(CHAT_INIT, initChat);

        yield takeEvery(CHAT_FETCH_MESSAGE, fetchChatMessage);
        yield takeEvery(CHAT_FETCH_USER, fetchChatUser);
        yield takeEvery(PAGE_FETCH, fetchPage);
    }
    catch(err) {
        console.error('[saga]', err);
    }
}

export default saga;
