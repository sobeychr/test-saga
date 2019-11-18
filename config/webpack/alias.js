const { rootPath, srcPath } = require('./paths');

module.exports = {
    Asset: rootPath + '/dist/asset',
    Component: srcPath + '/component',
    Data: srcPath + '/data',
    Page: srcPath + '/page',
    Scss: srcPath + '/scss',
    Store: srcPath + '/store',
    Util: srcPath + '/util',
};
