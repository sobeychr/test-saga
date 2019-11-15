const path = require('path');
const { nameLower, nameUcFirst, nameUpper } = require('./includes/_names');
const { writeFiles } = require('./includes/_files');

const rootPath = path.resolve(__dirname, './../');
const storePath = rootPath + '/src/store';

const contentAction = `import { ${nameUpper}_INIT } from 'Store/type';

const init = { type: ${nameUpper}_INIT };

export {
    init,
};
`;

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

writeFiles([
    {
        path: `${storePath}/action/${nameLower}.jsx`,
        content: contentAction,
    },
    {
        path: `${storePath}/reducer/${nameLower}.jsx`,
        content: contentReducer,
    },
    {
        path: `${storePath}/saga/${nameLower}.jsx`,
        content: contentSaga,
    },
]);
