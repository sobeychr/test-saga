import { padStart, padEnd } from 'lodash';

const fill = (string, filler, length, append=true) => append
    ? padEnd(string, length, filler)
    : padStart(string, length, filler);

export {
    fill,
};
