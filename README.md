{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:airbnb-base",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/require-default-props": "off",
        "react/function-component-definition": [2, {
          "namedComponents": "arrow-function"
        }],
        "arrow-parens": ["error", "as-needed"]
      }
}

