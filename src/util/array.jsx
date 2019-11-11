const addOnce = (array, value) => {
    const newArr = array.slice(0);
    if(!newArr.includes(value)) {
        newArr.push(value);
    }
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
    removeEntry,
};
