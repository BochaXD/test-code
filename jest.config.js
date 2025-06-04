module.exports = {
  rootDir: ".",  // Asegura rutas relativas correctas
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],  // Incluye todos los archivos en src
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text", "text-summary"],
  coverageProvider: "v8",  // Mejora compatibilidad y precisión
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
