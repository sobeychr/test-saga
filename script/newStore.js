const fs = require('fs');
const path = require('path');
const { upperFirst } = require('lodash');

const rootPath = path.resolve(__dirname, './../');
const storePath = rootPath + '/src/store';

const [ ,, name ] = process.argv;
const nameUpper = name.toUpperCase();
const nameLower = name.toLowerCase();
const nameUcFirst = upperFirst(nameLower);

const pathAction = `${storePath}/action/${nameLower}.jsx`;
const contentAction = `import { ${nameUpper}_INIT } from 'Store/type';

const init = { type: ${nameUpper}_INIT };

export {
    init,
};
`;

const pathReducer = `${storePath}/reducer/${nameLower}.jsx`;
const contentReducer = `import { ${nameUpper}_INIT } from 'Store/type';

const initialState = {
    test: [],
};

const ${nameLower} = (state=initialState, action) => {
    const { payload, type } = action;
    
    if(type === ${nameUpper}_INIT) {
        return {
            ...state,
        };
    }
    if(type === false) {
        return {
            ...state,
        };
    }

    return state;
};

export default ${nameLower};
`;

const pathSaga = `${storePath}/saga/${nameLower}.jsx`;
const contentSaga = `import { call, put } from 'redux-saga/effects';

import { init } from 'Store/action/${nameLower}';

function* init${nameUcFirst}() {
    try {
        // yield put(chessStart);
    }
    catch(err) {
        console.error('[init${nameUcFirst}]-try', err);
    }
}

export {
    init${nameUcFirst},
};
`;

const writeCallback = err => {
    if(err) throw err;
};

fs.writeFile(pathAction, contentAction, 'utf8', writeCallback);
fs.writeFile(pathReducer, contentReducer, 'utf8', writeCallback);
fs.writeFile(pathSaga, contentSaga, 'utf8', writeCallback);
