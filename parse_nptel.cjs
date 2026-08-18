const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const dir = 'C:\\Users\\tnjok\\OneDrive\\Documents\\NPTEL';

async function main() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.endsWith('.pdf')) continue;
    const fullPath = path.join(dir, file);
    try {
      const dataBuffer = fs.readFileSync(fullPath);
      const parser = new PDFParse(new Uint8Array(dataBuffer));
      const res = await parser.getText();
      const text = res.text ? res.text.replace(/\s+/g, ' ').trim() : '';
      console.log('==================================================');
      console.log(`FILE: ${file}`);
      console.log('TEXT:', text);
    } catch (err) {
      console.log(`ERR ${file}:`, err.message);
    }
  }
}

main();
