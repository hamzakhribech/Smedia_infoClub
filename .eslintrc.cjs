module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh',
    new webpack.DefinePlugin({
      process: {env: {}}
  })],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Turn off prop-types check
    'no-unused-vars': 'warn', // Change 'error' to 'warn' for unused imports
  },
    settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
