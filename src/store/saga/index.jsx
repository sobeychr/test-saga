import { put, takeEvery, takeLatest } from 'redux-saga/effects';
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

function* fetchPage(state) {
    try {
        const { payload: page } = state;

        fetch(`/${page}.txt`)
            .then(response => response.text())
            .then(text => {
                console.log('[fetchData]-promise', text);
                // yield put( endPage(page, text) );
                // const ttt = endPage(page, text);
                // console.log('ttt', ttt);

            })
            .catch(err => {
                console.error('[fetchData]-promise', err);
            });

    }
    catch(err) {
        console.error('[fetchData]-try', err);
    }
}

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
