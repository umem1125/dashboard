// .eslintrc.js
module.exports = {
  // ...
  plugins: ["import"],
  rules: {
    "import/no-cycle": "warn", // or "error"
    // other rules
  },
};
