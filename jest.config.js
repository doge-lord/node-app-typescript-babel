module.exports = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!**/node_modules/**"],
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts"],
  transform: {
    "^.+\\.(ts|js)$": "babel-jest",
  },
};
