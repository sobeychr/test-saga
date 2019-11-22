const alias = require('./config/webpack/alias');
const { rootPath, srcPath } = require('./config/webpack/paths');
const moduleNameMapper = {};

Object.keys(alias).map(key => {
    moduleNameMapper[`^${key}(.*)$`] = `${alias[key]}$1`
        .replace(rootPath, '<rootDir>')
        .replace(srcPath, '<rootDir>/src');
});

module.exports = {
    collectCoverageFrom: [
        '**/*.spec.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
    moduleNameMapper,
    // reporters: ['default', 'jest-junit'],
    roots: [
        '<rootDir>/script',
        '<rootDir>/src',
    ],
    setupFilesAfterEnv: ['<rootDir>/script/enzyme/adapter.js'],
    testMatch: [
        '**/*.spec.{js,jsx}',
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
};
