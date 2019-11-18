import { zeroFill } from './number';

const getDate = date =>
    [
        zeroFill(date.getFullYear(), 4),
        zeroFill(date.getMonth(), 2),
        zeroFill(date.getDate(), 2),
    ].join('-');

const getDateTime = date => getDate(date) + ' ' + getTime(date);

const getTime = date =>
    [
        zeroFill(date.getHours(), 2),
        zeroFill(date.getMinutes(), 2),
        zeroFill(date.getSeconds(), 2),
    ].join(':');

export { getDate, getDateTime, getTime };
