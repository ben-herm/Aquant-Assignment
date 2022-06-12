const alias = { '^@/(.+)': './src/\\1' }; // @/folder will be an alias to <root>/src/folder
const extensions = ['.android.js', '.ios.js', '.js', '.json', '.native'];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@': './src'
        }
      }
    ],
    'jest-hoist'
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};