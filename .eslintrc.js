module.exports = {
  extends: [
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': [
        {
          rootPathSuffix: './src',
          rootPathPrefix: '~/',
        },
        {
          rootPathSuffix: './pages',
          rootPathPrefix: '~pages/',
        },
      ],
    },
  },
  plugins: ['prettier', 'react', 'jest', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 1,
    'react/display-name': 'off',
    'prettier/prettier': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
}
