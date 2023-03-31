module.exports = {
  root: true,
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    //
    browser: true,
    node: true,
    es6: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁用 debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用 console
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-require-imports": 0,
  },
};
