module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/strongly-recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 'no-console': 0
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'single': 1
    'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
    curly: ['error', 'multi'],
    indent: ['warn', 2],
    'array-callback-return': ['off', { allowImplicit: true }],
    'no-return-assign': ['off'],
    'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }],
    'no-sequences': ['off'],
    'import/no-named-as-default': ['off']
  }
  
}

// Detalles y configuración
// https://eslint.vuejs.org/
// https://eslint.vuejs.org/rules/attribute-hyphenation.html