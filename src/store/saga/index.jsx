import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';

import {
    end as endPage,
    error as errorPage,
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
        
        if(content) {
            yield put( endPage(page, content) );
        }
        else {
            yield put(errorPage);
        }
    }
    catch(err) {
        console.error('[fetchData]-try', err);
    }
}

const loadPageData = async page => await fetch(`/${page}.md`)
    .then(
        response => response.status === 200
            ? response.text()
            : false
    )
    .then(text => text)
    .catch(err => false);

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
