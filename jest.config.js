module.exports = {
    clearMocks: true,
    collectCoverageFrom: [
        './src/**/*.spec.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    prettierPath: "",
    testMatch: ['**/__tests__/**/*.spec.jsx'],
    testURL: 'http://localhost',
};
