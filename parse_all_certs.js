import fs from 'fs';
import path from 'path';
import pdfParse from 'pdf-parse/lib/pdf-parse.js';

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
        const data = await pdfParse(dataBuffer);
        const text = data.text.trim();
        if (text.length > 0) {
          console.log('==================================================');
          console.log(`FILE: ${file}`);
          console.log('TEXT:\n', text.replace(/\n+/g, ' '));
        }
      } catch (err) {
        console.log(`ERR ${file}:`, err.message);
      }
    }
  }
}

main();
