module.exports = {
  rootDir: '../',
  transform: {
    '^.+\\.js?$': '<rootDir>/tests/jest-preprocess.js',
  },
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)test.js'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', 'public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost/',
  setupFiles: ['<rootDir>/tests/setup.js'],
};
