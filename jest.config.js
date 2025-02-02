const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname),
  preset: 'ts-jest',
  collectCoverage: true,
  testEnvironment: 'node',
  transform: {
    '\\.js$': 'babel-jest',
    '\\.ts$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  testMatch: ['<rootDir>/packages/**/__tests__/**/*.spec.{js,ts}'],
};
