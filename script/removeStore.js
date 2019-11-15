const path = require('path');
const { nameLower } = require('./includes/_names');
const { removeFiles } = require('./includes/_files');

const rootPath = path.resolve(__dirname, './../');
const storePath = rootPath + '/src/store';

removeFiles([
    `${storePath}/action/${nameLower}.jsx`,
    `${storePath}/reducer/${nameLower}.jsx`,
    `${storePath}/saga/${nameLower}.jsx`,
]);
