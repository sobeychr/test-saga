import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import { navigate as navigatePage } from 'Store/action/page';
import {
    INIT_APP,
    CHAT_INIT,
    CHAT_MESSAGE_START,
    CHAT_SEND,
    CHAT_USER_START,
    PAGE_FETCH,
} from 'Store/type';
import pages from 'Data/pages';

import { initChat, fetchMessage, fetchUser } from './chat';
// import { clickTile } from './chess';
import { fetchPage } from './page';

const firstPage = get(pages, '0.page');

function* initAppState() {
    try {
        yield put(navigatePage(firstPage));
    } catch (err) {
        console.error('[initAppState]-try', err);
    }
}

function* saga() {
    try {
        yield takeLatest(INIT_APP, initAppState);
        yield takeLatest(CHAT_INIT, initChat);

        yield takeEvery(CHAT_MESSAGE_START, fetchMessage);
        yield takeEvery(CHAT_USER_START, fetchUser);
        yield takeEvery(PAGE_FETCH, fetchPage);
    } catch (err) {
        console.error('[saga]', err);
    }
}

export default saga;
