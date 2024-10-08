/**
 * @typedef {import("ts-jest/dist/types").JestConfigWithTsJest} JestConfigWithTsJest
 */

/**
 * @type {JestConfigWithTsJest}
 */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  rootDir: 'src',
  testRegex: String.raw`.*\.spec\.ts$`,
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '.module.ts$',
    '.config.ts$',
    '.mock.ts$',
    '.spec.ts$',
    'src/main.ts',
    '.dto.ts',
    '.entity.ts',
    '.interface.ts',
    '.constants.ts',
  ],
  coverageReporters: ['html', 'json', 'text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'node',
};
