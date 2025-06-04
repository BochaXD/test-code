// check-passrate.js
const fs = require("fs");
const xml2js = require("xml2js");

const junitPath = "./reports/junit.xml";
const MIN_PASSRATE = 85; // % mínimo aceptado

fs.readFile(junitPath, (err, data) => {
  if (err) {
    console.error("No se encontró reports/junit.xml");
    process.exit(1);
  }
  xml2js.parseString(data, (err, result) => {
    if (err) {
      console.error("No se pudo parsear junit.xml");
      process.exit(1);
    }
    // Cambia esto según la estructura de tu junit.xml (puede ser testsuites o testsuite)
    let suite =
      result.testsuite ||
      (result.testsuites &&
        result.testsuites.testsuite &&
        result.testsuites.testsuite[0]);
    if (!suite || !suite["$"]) {
      console.error("No se encontró suite de pruebas en junit.xml");
      process.exit(1);
    }
    const attrs = suite["$"];
    const total = parseInt(attrs.tests, 10);
    const failures = parseInt(attrs.failures, 10) + parseInt(attrs.errors, 10);
    const passed = total - failures;
    const passRate = (passed / total) * 100;
    console.log(
      `Total: ${total}, Failures: ${failures}, PassRate: ${passRate.toFixed(
        2
      )}%`
    );
    if (passRate < MIN_PASSRATE) {
      console.error(
        `Pass rate (${passRate.toFixed(2)}%) menor a ${MIN_PASSRATE}% ❌`
      );
      process.exit(1);
    }
    console.log("Pass rate OK ✅");
  });
});
