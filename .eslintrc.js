module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'import/named': 'off',
    'import/no-named-as-default-member': 'off',
    'no-debugger': 'error',
    'quote-props': [2, 'consistent'],
    'no-dupe-args': 'error',
    'no-empty': 'error',
    'no-import-assign': 'error',
    'no-irregular-whitespace': 'error',
    'no-setter-return': 'error',
    eqeqeq: 'error',
    'no-eval': 'error',
    'no-proto': 'error',
    'no-return-await': 'error',
    'no-undef-init': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'always-multiline'],
    semi: [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/no-v-html': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'vue/html-self-closing': [
      'off',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/script-setup-uses-vars': 1,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': [
      'off',
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/component-name-in-template-casing': 'off',
    'no-console': 'off',
    'vue/component-definition-name-casing': 'off',
  },
  overrides: [
    {
      files: ['*-test.js', '*.spec.js'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  reportUnusedDisableDirectives: true,
};
