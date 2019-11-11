const fill = (string, filler, length, append=true) => {
    const repeat = Math.max(0, length - string.length);
    return append
        ? string + filler.repeat(repeat)
        : filler.repeat(repeat) + string;
};

export {
    fill,
};
