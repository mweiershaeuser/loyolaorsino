module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  coveragePathIgnorePatterns: [
    ".mock.ts",
    "/environments/*",
    "jest-global-mocks.ts",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", ".mock.ts"],
  moduleDirectories: ["node_modules", "./"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
};
