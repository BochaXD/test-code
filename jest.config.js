module.exports = {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports",
        outputName: "junit.xml",
        suiteName: "Demo CodeBuild Completo",
        classNameTemplate: "{classname} › {title}",
        titleTemplate: "{title}",
        ancestorSeparator: " › ",
        addFileAttribute: true
      }
    ]
  ]
};
