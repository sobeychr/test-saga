const addOnce = (array, value) => array.includes(value) ? array : array.concat(value);


const removeEntry = (array, value) => array.includes(value)
    ? array.splice(array.indexOf(value), 1) && array
    : array;

export {
    addOnce,
    removeEntry,
};
