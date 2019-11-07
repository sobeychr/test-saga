import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import {
    end as endPage,
    navigate as navigatePage,
} from 'Store/action/page';
import { INIT_APP, PAGE_FETCH } from 'Store/type';

import pages from 'Data/pages';
const firstPage = get(pages, '0.page');

function* initAppState() {
    try {
        yield put(navigatePage(firstPage));
    }
    catch(err) {
        console.error('[initAppState]-try', err);
    }
}

function* fetchPage(action) {
    try {
        const { payload: page } = action;
        const content = yield call(loadPageData, page);
        yield put( endPage(page, content) );
    }
    catch(err) {
        console.error('[fetchData]-try', err);
    }
}

const loadPageData = async page => await fetch(`/${page}.txt`)
    .then(response => response.text())
    .then(text => text)
    .catch(err => {
        console.error('[fetchData]-promise', err);
    });

function* saga() {
    try {
        yield takeLatest(INIT_APP, initAppState);
        yield takeEvery(PAGE_FETCH, fetchPage);
    }
    catch(err) {
        console.error('[saga]', err);
    }
}

export default saga;
