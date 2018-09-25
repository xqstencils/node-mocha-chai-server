module.exports = {
  rootDir: '../src',
  testURL: 'http://localhost/',
  globals: {
  },
  coverageDirectory: '../coverage',
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  coverageReporters: ['html'],
  testMatch: ['**/__tests__/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/src/index.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/coverage',
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  }
}
