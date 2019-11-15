const path = require('path');
const { nameArg, nameLower } = require('./includes/_names');
const { insertLine, writeFiles } = require('./includes/_files');

const rootPath = path.resolve(__dirname, './../');
const srcPath = rootPath + '/src';

const contentScss = '';

const contentJsx = `import React from 'react';

import 'Scss/page/${nameLower}';

const ${nameArg} = () => (
    <main className='list'>
        <h2>page - ${nameLower}</h2>
    </main>
);

export default ${nameArg};
`;

/*
writeFiles([
    {
        path: `${srcPath}/scss/page/${nameLower}.scss`,
        content: contentScss,
    },
    {
        path: `${srcPath}/page/${nameArg}.jsx`,
        content: contentJsx,
    },
]);
*/

insertLine({
    file: `${srcPath}/Router.jsx`,
    start: 'import {\n',
    end: '\n} from \'Page\';',
    line: `    ${nameArg},`
});
