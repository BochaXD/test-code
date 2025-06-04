module.exports = {
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
  ]
};
