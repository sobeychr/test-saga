const addOnce = (array, value) => {
    const newArr = array.slice(0);
    if(!newArr.includes(value)) {
        newArr.push(value);
    }
    return newArr;
};

/*
 * Compiles an array based on conditions
 * const testString = 'abc';
 * const sendArray = [
 *     ['value1', testString.length > 0],
 *     ['value2', testString.length > 50],
 *     ['value3', testString.contains('c')],
 * ];
 * const compiledArray = compileCondition(sendArray);
 * // compiledArray = ['value1', 'value3'];
 */
const compileCondition = array => {
    const newArr = [];
    array.map(entry => {
        const [value, condition] = entry;
        if(condition) {
            newArr.push(value);
        }
    });
    return newArr;
};

const removeEntry = (array, value) => {
    const newArr = array.slice(0);
    const index = newArr.indexOf(value);
    if(index >= 0) {
        newArr.splice(index, 1);
    }
    return newArr;
};

export {
    addOnce,
    compileCondition,
    removeEntry,
};
