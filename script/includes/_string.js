const cut = (string, start, end, include=false) => {
    let indexStart = string.indexOf(start);
    if(indexStart < 0) {
        return string;
    }
    if(!include) indexStart += start.length;

    let indexEnd = string.indexOf(end, indexStart + 1);
    if(indexEnd < 0) {
        return string.substr(indexStart);
    }
    if(include) indexEnd += end.length;

    return string.substring(indexStart, indexEnd);
};

const insertLine = (string, line, sort=false, split='\n') => {
    const arr = string.split(split);
    arr.push(line);
    if(sort) arr.sort();
    return arr.filter(entry => entry.length > 0).join(split);
};

const insertLineBetween = (string, line, start, end, sort=false, split='\n') => {
    const cutString = cut(string, start, end);
    const replace = insertLine(cutString, line, sort, split);
    return string.replace(cutString, replace);
};

module.exports = {
    cut,
    insertLine,
    insertLineBetween,
};
