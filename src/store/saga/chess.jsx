import { call, put } from 'redux-saga/effects';

import { init } from 'Store/action/chess';

function* initChess() {
    try {
        // yield put(chessStart);
    } catch (err) {
        console.error('[initChess]-try', err);
    }
}

export { initChess };
