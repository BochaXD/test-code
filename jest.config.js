module.exports = {
  rootDir: ".",  
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"], 
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "text-summary"],
  coverageProvider: "v8",  
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
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
