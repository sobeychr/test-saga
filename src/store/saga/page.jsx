import { call, put } from 'redux-saga/effects';

import {
    end as endPage,
    error as errorPage,
} from 'Store/action/page';

function* fetchPage(action) {
    try {
        const { payload: page } = action;
        const content = yield call(loadData, page);
        
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

const loadData = async page => await fetch(`/api/page/${page}.md`)
    .then(
        response => response.status === 200
            ? response.text()
            : false
    )
    .then(text => text)
    .catch(err => false);

export {
    fetchPage,
};
