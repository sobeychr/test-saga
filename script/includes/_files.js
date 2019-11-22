const colors = require('colors/safe');
const fs = require('fs');

const { insertLineBetween } = require('./_string');

const writeFlag = { encoding: 'utf8', flag: 'w' };

const insertInFiles = (file, replaces) => {
    fs.readFile(file, 'utf8', (err, data) => {
        const { dir, filename } = logFile(file);
        if (err) {
            console.log(
                colors.red('>> unable to find file for "insertLine"'),
                dir,
                colors.cyan(filename),
            );
            throw err;
        }

        let newData = data;
        replaces.map(entry => {
            const { start, end, line } = entry;
            newData = insertLineBetween(newData, line, start, end, true);
        });

        writeFiles([
            {
                path: file,
                content: newData,
            },
        ]);
    });
};

const funcRemove = path => err => {
    const { dir, filename } = logFile(path);
    if (err) {
        console.log(
            colors.red('>> unable to remove file'),
            dir,
            colors.cyan(filename),
        );
    } else {
        console.log('>> removed file', dir, colors.cyan(filename));
    }
};

const funcWrite = path => err => {
    const { dir, filename } = logFile(path);
    if (err) throw err;
    else {
        console.log('>> written file', dir, colors.cyan(filename));
    }
};

const logFile = path => {
    const index = path.lastIndexOf('/') + 1;
    const filename = path.substr(index);
    const dir = path.substr(0, index);
    return {
        dir,
        filename,
    };
};

const removeFiles = files => {
    files.map(path => {
        fs.unlink(path, funcRemove(path));
    });
};

const writeFiles = files => {
    files.map(entry => {
        const { path, content } = entry;
        fs.writeFile(path, content, writeFlag, funcWrite(path));
    });
};

module.exports = {
    insertInFiles,
    removeFiles,
    writeFiles,
};
