const colors = require('colors/safe');
const fs = require('fs');

const funcRemove = path => err => {
    if(err) {
        console.log(
            colors.red('>> unable to remove file'),
            path,
        );
    }
    else {
        console.log(
            '>> removed file',
            path,
        );
    }
};

const funcWrite = path => err => {
    if(err) throw err;
    else {
        const index = path.lastIndexOf('/') + 1;
        const filename = path.substr(index);
        const cutpath = path.substr(0, index);
        console.log(
            '>> written file',
            cutpath,
            colors.cyan(filename),
        );
    }
};

const removeFiles = files => {
    files.map(path => {
        fs.unlink(path, funcRemove(path));
    });
};

const writeFiles = files => {
    files.map(entry => {
        const { path, content } = entry;
        fs.writeFile(path, content, 'utf8', funcWrite(path));
    });
};

module.exports = {
    removeFiles,
    writeFiles,
};