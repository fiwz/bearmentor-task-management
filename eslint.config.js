export default [
  {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaVersion": 21,
      "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    }
  }
]