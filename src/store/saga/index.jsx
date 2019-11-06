import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

function* saga() {
    try {
        // yield takeLatest('INIT_APP_D', initAppState);
    }
    catch(err) {
        console.error('[saga]', err);
    }
}

export default saga;
