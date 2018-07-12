module.exports = {
  extends: ["kentcdodds", "kentcdodds/jest"],
  rules: {
    complexity: ["error", 10],
    "no-console": "off",
    "require-await": "off",
    "no-unused-vars": [
      "error",
      {
        args: "none",
        ignoreRestSiblings: true
      }
    ],
    "babel/new-cap": "off",
    "max-statements": "off",
    "no-bitwise": "off"
  }
}
