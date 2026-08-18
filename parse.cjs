const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dirs = [
  'C:\\Users\\tnjok\\OneDrive\\Documents\\NPTEL',
  'C:\\Users\\tnjok\\Downloads'
];

async function main() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith('.pdf')) continue;
      const fullPath = path.join(dir, file);
      try {
        const dataBuffer = fs.readFileSync(fullPath);
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const res = await parser.getText();
        console.log('==================================================');
        console.log(`FILE: ${file}`);
        console.log('TEXT:\n', res.text ? res.text.replace(/\s+/g, ' ') : JSON.stringify(res).slice(0, 300));
      } catch (err) {
        console.log(`ERR ${file}:`, err.message);
      }
    }
  }
}

main();
