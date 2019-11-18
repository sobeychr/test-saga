module.exports = {
    collectCoverageFrom: [
        '**/*.spec.jsx',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
    // reporters: ['default', 'jest-junit'],
    roots: [
        '<rootDir>/script',
        '<rootDir>/src',
    ],
    testMatch: [
        '**/*.spec.{js,jsx}',
    ],
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    }
};
