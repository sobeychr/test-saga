module.exports = {
    collectCoverageFrom: [
        '**/*.spec.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
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
