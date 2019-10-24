module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "indent": ["error", 2],
    // "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": [2, "always"],
    "react/prop-types": 0,
    "no-class-assign": 0,
    "no-func-assign": 0,
    "object-shorthand": [2, "always"],
    "object-curly-spacing": [1, "always"],
    "space-before-function-paren": [2, "always"],
    "no-multiple-empty-lines": [1, { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
    "lines-between-class-members": [1, "always"],
    "padded-blocks": [1, "never"],
    // "import/first": [2],
    // "import/newline-after-import": [1, { "count": 2 }],
    // "import/no-default-export": [2],
    // "import/no-duplicates": [2],
    // "import/order": [1, {
    //     "groups": [
    //         "builtin",
    //         "external",
    //         ["parent", "sibling", "index"]
    //     ],
    //     "newlines-between": "always"
    // }],
    "padding-line-between-statements": [2,
        { "blankLine": "always", "prev": "function", "next": "*" }
    ],
    // "sort-keys": [1, "asc", {
    //     "caseSensitive": false, "natural": true
    // }],
    "max-len": [2, { "code": 100 }],
    "space-in-parens": [1, "never"],
    "no-multi-spaces": [1, { ignoreEOLComments: true }],
    "object-property-newline": [1, { allowAllPropertiesOnSameLine: true }],
    "keyword-spacing": [1, { "after": true, "before": true }],
    "space-before-blocks": [1, "always"],
    "brace-style": [1, "1tbs"],
    "arrow-spacing": [1, { "after": true, "before": true }],
    "comma-spacing": [1],
    "space-infix-ops": [1],
    "rest-spread-spacing": [1],
    "key-spacing": [1, {
        "afterColon": true,
        "beforeColon": false
    }],
    "operator-linebreak": [1, "after"],
    "no-useless-catch": "error"
  },
} 