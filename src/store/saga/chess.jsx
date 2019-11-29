import { call, put } from 'redux-saga/effects';

import { init } from 'Store/action/chess';

function* clickTile() {
    try {
        // yield put(chessStart);
    } catch (err) {
        console.error('[clickTile]-try', err);
    }
}

export { clickTile };
