const fs = require('fs');
const data = JSON.parse(fs.readFileSync('audit.json', 'utf-8'));
if (data.metadata && data.metadata.vulnerabilities) {
  const { critical, high, moderate } = data.metadata.vulnerabilities;
  if (critical > 0 || high > 0 || moderate > 0) {
    console.error(`¡Dependencias vulnerables detectadas! Crit: ${critical}, High: ${high}, Moderate: ${moderate}`);
    process.exit(1);
  }
}
console.log("No hay vulnerabilidades serias detectadas en dependencias.");
