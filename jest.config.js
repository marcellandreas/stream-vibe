// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Direktori yang mencakup file konfigurasi Next.js
  dir: "./",
});

const customJestConfig = {
  // Abaikan folder .next dan node_modules dalam pengujian
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  // Gunakan environment jsdom untuk pengujian berbasis DOM
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Mapping untuk impor CSS atau file statis
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
};

module.exports = createJestConfig(customJestConfig);
