const colors = require('colors/safe');
const fs = require('fs');
const writeFlag = { encoding: 'utf8', flag: 'wx' };

const insertLine = ({file, start, end, line, sort=true, split='\n'}) => {
    fs.readFile(file, 'utf8', (err, data) => {
        const { dir, filename } = logFile(file);
        if(err) {
            console.log(
                colors.red('>> unable to find file for "insertLine"'),
                dir,
                colors.cyan(filename),
            );
            throw err;
        }

        let indexStart = data.indexOf(start);
        if(indexStart < 0) {
            console.log(
                colors.red('>> unable to find start index for "insertLine"'),
                dir,
                colors.cyan(filename),
            );
            console.log('>> start string', colors.cyan(start));
            console.log(colors.gray(data));
            return;
        }
        indexStart += start.length;

        const indexEnd = data.indexOf(end, indexStart);
        if(indexEnd < 0 || indexEnd <= indexStart) {
            console.log(
                colors.red('>> unable to find end index for "insertLine"'),
                dir,
                colors.cyan(filename),
            );
            console.log('>> end string', colors.cyan(end));
            console.log(colors.gray(data));
            return;
        }

        const cutString = data.substring(indexStart, indexEnd);
        const cutArr = cutString.split(split);
        cutArr.push(line);

        if(sort) {
            cutArr.sort();
        }

        const newData = data.replace(cutString, cutArr.join(split));
        console.log('>> newData', newData);
    });
};

const funcRemove = path => err => {
    const { dir, filename } = logFile(path);
    if(err) {
        console.log(
            colors.red('>> unable to remove file'),
            dir,
            colors.cyan(filename),
        );
    }
    else {
        console.log(
            '>> removed file',
            dir,
            colors.cyan(filename),
        );
    }
};

const funcWrite = path => err => {
    const { dir, filename } = logFile(path);
    if(err) throw err;
    else {
        console.log(
            '>> written file',
            dir,
            colors.cyan(filename),
        );
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

        fs.exists(path, exists => {
            if(exists) {
                const { dir, filename } = logFile(path);
                console.log(
                    colors.red('>> cannot overwrite file'),
                    dir,
                    colors.cyan(filename),
                );
            }
            else {
                fs.writeFile(path, content, writeFlag, funcWrite(path));
            }
        });
    });
};

module.exports = {
    insertLine,
    removeFiles,
    writeFiles,
};