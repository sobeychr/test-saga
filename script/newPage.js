const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, './../');
const srcPath = rootPath + '/src';

const [ ,, nameUpper ] = process.argv;
const nameLower = nameUpper.toLowerCase();

const pathScss = `${srcPath}/scss/page/${nameLower}.scss`;
const contentScss = '';

const pathJsx = `${srcPath}/page/${nameUpper}.jsx`;
const contentJsx = `import React from 'react';

import 'Scss/page/${nameLower}';

const ${nameUpper} = () => (
    <main className='list'>
        <h2>page - ${nameLower}</h2>
    </main>
);

export default ${nameUpper};
`;

const writeCallback = err => {
    if(err) throw err;
};


fs.writeFile(pathScss, contentScss, 'utf8', writeCallback);
fs.writeFile(pathJsx, contentJsx, 'utf8', writeCallback);
