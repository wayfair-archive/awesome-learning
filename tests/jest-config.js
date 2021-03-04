module.exports = {
  globals: {
    __PATH_PREFIX__: '',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
  rootDir: '../',
  setupFiles: ['<rootDir>/tests/setup.js'],
  transform: {
    '^.+\\.js?$': '<rootDir>/tests/jest-preprocess.js',
  },
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)test.js'],
};
