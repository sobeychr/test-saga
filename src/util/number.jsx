import { fill } from './string';

const zeroFill = (number, length) => fill(number.toString(), '0', length, false);

export {
    zeroFill,
};
