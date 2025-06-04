const fs = require('fs');
const path = require('path');

const ccRegex = /\b(?:\d[ -]*?){13,16}\b/g; // Patrón básico para tarjetas de crédito

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const matches = content.match(ccRegex);
  if (matches) {
    console.log(`Posible información sensible en: ${filePath}`);
    matches.forEach((match) => console.log(`  → ${match}`));
  }
}

function scanDirectory(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else if (fullPath.endsWith('.js')) {
      scanFile(fullPath);
    }
  });
}

scanDirectory('./');
