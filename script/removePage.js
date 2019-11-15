const fs = require('fs');
const path = require('path');

const rootPath = path.resolve(__dirname, './../');
const srcPath = rootPath + '/src';

const [ ,, nameUpper ] = process.argv;
const nameLower = nameUpper.toLowerCase();

const pathScss = `${srcPath}/scss/page/${nameLower}.scss`;
const pathJsx = `${srcPath}/page/${nameUpper}.jsx`;

const unlinkCallback = err => {
    if(err) throw err;
};

fs.unlink(pathScss, unlinkCallback);
fs.unlink(pathJsx, unlinkCallback);
