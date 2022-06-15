module.exports = {
      parser: "@typescript-eslint/parser",
      extends: [
            "plugin:@typescript-eslilnt/recommended",
            "prettier/@typescript-eslint",
            "plugin:prettier/recommended",
      ],
      parseOptions: {
            ecmaVersion: 2018,
            sourceTYpe: "module"
      },
      rules: {}
}