module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "json-summary"],

  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports",
        outputName: "junit.xml",
        suiteName: "NodeJS Test Report",
        classNameTemplate: "{classname} → {title}",
        titleTemplate: "{title}",
        ancestorSeparator: " → "
      }
    ]
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
