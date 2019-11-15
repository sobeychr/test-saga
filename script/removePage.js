const path = require('path');
const { nameArg, nameLower } = require('./includes/_names');
const { removeFiles } = require('./includes/_files');

const rootPath = path.resolve(__dirname, './../');
const srcPath = rootPath + '/src';

removeFiles([
    `${srcPath}/scss/page/${nameLower}.scss`,
    `${srcPath}/page/${nameArg}.jsx`,
]);
