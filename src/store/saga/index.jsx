import {
  // call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { loadHome, loadHomeEnd } from 'Store/action/data';
import { DATA_FETCH, INIT_APP } from 'Store/type';



function* initAppState() {
    try {
        yield put(loadHome);
    }
    catch(err) {
        console.error('[initAppState]', err);
    }
}

function* fetchData() {
    try {
        yield put(loadHomeEnd);
    }
    catch(err) {
        console.error('[fetchData]', err);
    }
}

function* saga() {
    try {
        yield takeLatest(INIT_APP, initAppState);
        yield takeEvery(DATA_FETCH, fetchData);
    }
    catch(err) {
        console.error('[saga]', err);
    }
}

export default saga;
