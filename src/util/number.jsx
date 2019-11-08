const zeroFill = (number, length) => {
    const str = number.toString();
    const repeat = Math.max(0, length - str.length);
    return '0'.repeat(repeat) + str;
};

export {
    zeroFill,
};
