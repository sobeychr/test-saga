const colors = require('colors/safe');
const { upperFirst } = require('lodash');

const [, , nameArg] = process.argv;

if (!nameArg) {
    console.log(
        colors.red('Error'),
        'Unable to run without a',
        colors.cyan('name'),
        'parameter',
    );
    process.exit(1);
}

const nameLower = nameArg.toLowerCase();
const nameUcFirst = upperFirst(nameLower);
const nameUpper = nameArg.toUpperCase();

module.exports = {
    nameArg,
    nameLower,
    nameUcFirst,
    nameUpper,
};
